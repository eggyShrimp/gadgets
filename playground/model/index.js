const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '.pdf')
    }
})
const upload = multer({ storage: storage })

entry().catch(error => console.log(error))

async function entry() {
    app.get('/', (req, res, next) => {
        res.type('text/html')
        res.sendFile('./index.html')
    })

    app.post('/calc', upload.single('cv'), (req, res, next) => {
        res.type('text/plain')
        res.status(200).json(req.file)
    })

    app.get('/jsonp', (req, res, next) => {
        res.type('text/javascript')
        res.jsonp({ value: 'hello' })
    })

    // event source
    app.get('/events', async (req, res) => {
        console.log('Got /events');
        res.set({
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive'
        });
        res.flushHeaders();

        // Tell the client to retry every 10 seconds if connectivity is lost
        res.write('retry: 10000\n\n');
        let count = 0;

        while (true) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Emit', ++count);
            // Emit an SSE that contains the current 'count' as a string
            res.write(`data: ${count}\n\n`);
        }
    }
    )

    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })
}