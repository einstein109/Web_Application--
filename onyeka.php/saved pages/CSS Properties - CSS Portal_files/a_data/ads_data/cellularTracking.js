if(eDmpId&&eExId&&_eDmnBase){var __eConType=0;if(navigator.connection)switch(navigator.connection.type){case"ethernet":__eConType=1;break;case"wifi":case"wimax":__eConType=2;break;case"cellular":switch(navigator.connection.downlinkMax){case.01:case.064:case.115:case.153:case.237:case.384:__eConType=4;break;case 2:case 2.46:case 3.1:case 3.6:case 14.7:case 14.3:case 14.4:case 21:case 42:__eConType=5;break;case 100:__eConType=6;break;default:__eConType=3}break;case"bluetooth":case"none":case"unknown":case"mixed":case"other":default:__eConType=0}var imgUrl=_eDmnBase+"col?u="+eDmpId+"&exid="+eExId+"&ct="+__eConType;if(_eExtras)for(var i=0;i<_eExtras.length;i++)imgUrl+="&"+_eExtras[i];(new Image).src=imgUrl}