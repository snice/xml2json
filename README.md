## xml2json

a module for node and browser

### Usage
```
var parse = require('xml2json');
jQuery.ajax({
  url: '/path/to/cgi',
  dataType: 'xml'
}).done(function(xml){
  var data = parse(xml);
  console.log(data);
  console.log(JSON.stringify(data));
});
```

### Example

`xml`

```
<div>
  <p>1</p>
  <span>2</span>
  <a href="#"></a>
  <a href="#2">3</a>
  <link><![CDATA[http://imc.l.qq.com/click?oid=2610061&cid=1350437&adtype=WL&soid=3B257D4600395704C87D09889300&aver=0&ev=37&refluence=4002&requestl=4002&tagid=&si=3430953226&target=4002&isfloatindex=0&pf=H5&loc=LV_1001_YDLDVi_LD&click_data=dXNlcl9pbmZvPXZCVDJuVHN3SEJXNUZPT2RJem9WQzdvZV9KNDI=&live=0&aid_tpid=2&aid_tpid2=1089&aid_tpid3=10470&aid_dura=2684&aid_vid_drm=0&aid_copyright=89&aid_cover=e7hi6lep1yc51ca&aid_subtype=1024_1048576_4&aid_column=0]]></link>
</div>
```

`json`

```
{
  "div": {
    "p": "1",
    "span": "2",
    "a": [
      "",
      "3"
    ],
    "link": "http://imc.l.qq.com/click?oid=2610061&cid=1350437&adtype=WL&soid=3B257D4600…right=89&aid_cover=e7hi6lep1yc51ca&aid_subtype=1024_1048576_4&aid_column=0"
  }
}
```

### document
* [xml2json document](http://zobor.me/archives/)
