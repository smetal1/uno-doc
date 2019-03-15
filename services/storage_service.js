const os = require('os');
const fs = require('fs');
const mime = require('mime-types');
const path = require('path');
const multer = require('multer');
const uuid = require('uuid');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, os.tmpdir());
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const name = `${uuid.v4()}${ext}`;
      cb(null, name);
    }
  });

  exports.storage=storage;