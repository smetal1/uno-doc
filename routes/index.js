var express = require('express');
var router = express.Router();

const os=require('os');
const path=require('path');
const multer=require('multer');

const uuid=require('uuid');
const Converter=require('../services/converter_service');
const {wrap} = require('async-middleware');
const {storage}=require('../services/storage_service');
 

const upload = multer({
  storage: storage,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/convert/:command(*)',
upload.single('file'),
wrap(async(req,res,next)=>{
  const {file}=req;
  if(!file){
    console.log('cannot find file');
  }
  const {command}=req.params;
  const {args,options}=Converter.parseUrlCommand(command);
  const outputFile = await converter.convert(file.path, args, options);
  const filename = options.output || `${path.parse(file.originalname).name}.${options.format}`;
  res.set('Content-Disposition', contentDisposition(filename));
  res.sendFile(outputFile);  
})
)
module.exports = router;
