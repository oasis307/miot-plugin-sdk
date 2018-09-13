'use strict';var n=require('child_process'),o=n.spawn,r=n.execSync,e=require('path'),i=require("fs"),t=e.join(__dirname,"..","..");process.chdir(t),process.on('uncaughtException',function(){process.exit(1e3)});try{!(function(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];[2].concat(o)})(1)}catch(n){console.log("PLEASE USE NODE v9 AT LEAST"),process.exit(100)}function c(n,o,r){var e=i.createReadStream(n);e.on('error',function(o){o&&console.log('read error',n),r&&r(o)});var t=i.createWriteStream(o);t.on('error',function(n){n&&console.log('write error',o),r&&r(n)}),t.on('close',function(n){r&&r(n)}),e.pipe(t)}function l(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(i.readdirSync(n)||[]).forEach(function(t){var c=e.join(n,t),a=i.statSync(c);if(a.isDirectory()){var u=e.relative(r||n,c);o.onDir&&!o.onDir(e.relative(r||n,c))||(l(c,o,r||n),o&&o.afterDir&&o.afterDir(u))}else a.isFile()&&(o.onFile||o)(e.relative(r||n,c))})}module.exports={project_dir:t,ANDROID:"android",IOS:"ios",IDX_ANDROID:0,IDX_IOS:1,IDX_MOD:2,IDX_PATH:3,IDX_TYPE:4,TYPE_MODULE:1,TYPE_ASSET:2,exec:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=o(n,r);i.stdout.on('data',function(n){console.log(n.toString())}),i.stderr.on('data',function(n){console.log('error\uff1a'+n)}),i.on('close',function(n){e&&e(n)})},execSync:r,copyFile:c,copyFolder:function n(o,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i.readdir(o,function(l,a){var u=0,s=function(){++u==a.length&&t&&t()};l?s():(a.forEach(function(t){var l=e.join(o,t),a=e.join(r,t);i.stat(l,function(o,r){r.isDirectory()?i.mkdir(a,function(o){o?console.log(o):n(l,a,s)}):c(l,a,s)})}),0===a.length&&t&&t())})},makeDirs:function n(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i.exists(o,function(t){t?r&&r():n(e.dirname(o),function(){i.mkdir(o,r||function(){})})})},loadAllFiles:function(n){var o=[];return l(n,function(n){return o.push(n)}),o},loadFiles:l,removeDir:function(n){l(n,{afterDir:function(o){i.rmdirSync(e.join(n,o))},onFile:function(o){i.unlinkSync(e.join(n,o))}})},objectWithoutProperties:function(n){for(var o={},r=arguments.length,e=Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];for(var t in n)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t]);return o}};