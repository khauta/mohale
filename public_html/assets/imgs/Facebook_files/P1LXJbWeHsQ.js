if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("LSGroupRoomTruncate",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(a){return b.fe(b.ftr(b.db.table(63).fetch(),function(a){return b.i64.neq(a.groupRoomType,d)&&b.i64.neq(a.groupRoomType,[0,5])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSRoomTruncate",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(a){return b.fe(b.ftr(b.db.table(63).fetch(),function(a){return b.i64.eq(a.groupRoomType,d)||b.i64.eq(a.groupRoomType,[0,5])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);