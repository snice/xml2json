function xml2json(xml, obj){
  obj = obj || {};
  if (xml && xml.childNodes && xml.childNodes.length ){
    var childs = xml.childNodes, len = xml.childNodes.length;
    var item;
    if (len===1 && (childs[0].nodeType===3 || childs[0].nodeType===4)){
      if ( isArray(obj) ){
        obj.push(childs[0].nodeValue);
      }else{
        obj = childs[0].nodeValue;
      }
    }else{
      for(var i=0;i<len;i++){
        item = childs[i];
        if (item.nodeType===1){
          // 该节点已经存在，用数组装起来
          if (obj.hasOwnProperty(item.nodeName) &&
              !isArray(obj[item.nodeName])) {
            obj[item.nodeName] = [obj[item.nodeName]];
          }
          if ( isArray(obj[item.nodeName]) ) {
            obj[item.nodeName].push( xml2json(item, {}) );
          }else{
            obj[item.nodeName] = xml2json(item, {});
          }
        }
      }
    }
  }else{
    obj = xml.nodeValue||'';
  }
  function isArray(a){
    if (typeof a==='object' && a.constructor===Array) return true;
    return false;
  }
  return obj
}