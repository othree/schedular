this["Templates"] = this["Templates"] || {};

this["Templates"]["cell"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"cell\">");_.b("\n" + i);_.b("    <div class=\"cell-mover\"></div>");_.b("\n" + i);_.b("    <div class=\"cell-content\"></div>");_.b("\n" + i);_.b("</div>");_.b("\n");return _.fl();;});