const fs = require("fs");
var FormData = require("form-data");
const request = require("request");

function test() {
  const dirname = "../data/campings";
  const files = [];
  fs.readdirSync(dirname).map((name, i) => {
    const filename = dirname + "/" + name;
    const camp = JSON.parse(fs.readFileSync(filename).toString());
    const form = new FormData();
    console.log(camp.geometry)
    Object.keys(camp).map((key) => {
      form.append(key, JSON.stringify(camp[key]));
    });
    const campFileId = name.split('.')[0];
    const campPicturePrefix = '../data/imgs/' + campFileId + '.'
    for (let i = 0; i < 2; i++)
    {
      const  campPicture = campPicturePrefix + i + '.jpg'
      try
      {

        form.append('images', fs.createReadStream(campPicture))
      } catch(e) {
      }
    }
    form.submit('http://192.168.0.117:8888/api/campgrounds', (e, r, b) => {
      if (i == 1)
      {
      console.log(e,r.statusCode, b)
    }
    })
  });
}
test();

/*

   request.post(
      { url: "http://192.168.0.117:8888/api/campgrounds", formData: form },
      function (err, httpResponse, body) {
        if (err) {
          return console.error("upload failed:", err);
        }
        console.log("Upload successful!  Server responded with:", body);
      }
    );
  });
  */