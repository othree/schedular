this["Templates"] = this["Templates"] || {};

this["Templates"]["row"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<tr>");_.b("\n" + i);if(_.s(_.f("cells",c,p,1),c,p,0,19,52,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <td>");_.b("\n" + i);_.b("        ");_.b("\n" + i);_.b("    </td>");_.b("\n");});c.pop();}_.b("</tr>");_.b("\n");return _.fl();;});