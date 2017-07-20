define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.name = 'Test McTesterson';
            this.position = 'Software Developer';
            this.img = 'http://imgur.com/N0JqEb7.png';
            this.phone = '';
            this.facebook = '';
            this.linkedin = '';
            this.twitter = '';
            this.instagram = '';
        }
        Object.defineProperty(App.prototype, "formattedPhone", {
            get: function () {
                return this.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            },
            enumerable: true,
            configurable: true
        });
        App.prototype.copyToClipboard = function () {
            window.getSelection().selectAllChildren(this.signature);
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            }
            catch (err) {
                console.log('Oops, unable to copy');
            }
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBRUUsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1lBQzFCLGFBQVEsR0FBRyxvQkFBb0IsQ0FBQztZQUNoQyxRQUFHLEdBQUcsOEJBQThCLENBQUM7WUFDckMsVUFBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxhQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFjakIsQ0FBQztRQWJDLHNCQUFJLCtCQUFjO2lCQUFsQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbkUsQ0FBQzs7O1dBQUE7UUFDRCw2QkFBZSxHQUFmO1lBQ0UsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLFlBQVksR0FBRyxjQUFjLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDO1FBQ0gsVUFBQztJQUFELENBdkJBLEFBdUJDLElBQUE7SUF2Qlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHNpZ25hdHVyZTtcbiAgbmFtZSA9ICdUZXN0IE1jVGVzdGVyc29uJztcbiAgcG9zaXRpb24gPSAnU29mdHdhcmUgRGV2ZWxvcGVyJztcbiAgaW1nID0gJ2h0dHA6Ly9pbWd1ci5jb20vTjBKcUViNy5wbmcnO1xuICBwaG9uZSA9ICcnO1xuICBmYWNlYm9vayA9ICcnO1xuICBsaW5rZWRpbiA9ICcnO1xuICB0d2l0dGVyID0gJyc7XG4gIGluc3RhZ3JhbSA9ICcnO1xuICBnZXQgZm9ybWF0dGVkUGhvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvbmUucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgJygkMSkgJDItJDMnKTtcbiAgfVxuICBjb3B5VG9DbGlwYm9hcmQoKSB7XG4gICAgd2luZG93LmdldFNlbGVjdGlvbigpLnNlbGVjdEFsbENoaWxkcmVuKHRoaXMuc2lnbmF0dXJlKTtcbiAgICB0cnkge1xuICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgdmFyIG1zZyA9IHN1Y2Nlc3NmdWwgPyAnc3VjY2Vzc2Z1bCcgOiAndW5zdWNjZXNzZnVsJztcbiAgICAgIGNvbnNvbGUubG9nKCdDb3B5aW5nIHRleHQgY29tbWFuZCB3YXMgJyArIG1zZyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnT29wcywgdW5hYmxlIHRvIGNvcHknKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><form class=\"form form-horizontal\" style=\"width:470px;margin:150px\"><div class=\"form-group\"><label for=\"name\">name</label><input type=\"text\" name=\"name\" value.bind=\"name\"></div><div class=\"form-group\"><label for=\"position\">position</label><input type=\"text\" name=\"position\" value.bind=\"position\"></div><div class=\"form-group\"><label for=\"img\">img</label><input type=\"text\" name=\"img\" value.bind=\"img\"></div><div class=\"form-group\"><label for=\"phone\">phone</label><input type=\"text\" name=\"phone\" value.bind=\"phone\"></div><div class=\"form-group\"><label for=\"facebook\">facebook</label><input type=\"text\" name=\"facebook\" value.bind=\"facebook\"></div><div class=\"form-group\"><label for=\"linkedin\">linkedin</label><input type=\"text\" name=\"linkedin\" value.bind=\"linkedin\"></div><div class=\"form-group\"><label for=\"twitter\">twitter</label><input type=\"text\" name=\"twitter\" value.bind=\"twitter\"></div><div class=\"form-group\"><label for=\"instagram\">instagram</label><input type=\"text\" name=\"instagram\" value.bind=\"instagram\"></div><button type=\"button\" name=\"button\" click.trigger=\"copyToClipboard()\"><i class=\"fa fa-clipboard\"></i> Copy to Clipboard</button></form><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"470\" style=\"width:470px\" ref=\"signature\"><tbody><tr valign=\"top\"><td style=\"padding-left:10px;width:10px;padding-right:10px\"><img src=\"${img ||'http://imgur.com/N0JqEb7.png'}\" width=\"65\" height=\"65\" alt=\"photo\" style=\"-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%\"></td><td style=\"border-right:1px solid #45668e\"></td><td style=\"text-align:initial;font:14px Arial;color:#646464;padding:0 10px\"><div><b class=\"text-color theme-font\">${name}</b><br><span>${position}</span><br></div><div style=\"color:#8d8d8d;font-size:13px;padding:5px 0 0 0\"><a href=\"tel:${formattedPhone}\" style=\"color:#8d8d8d;text-decoration:none\">${formattedPhone}</a><span if.bind=\"phone\" style=\"color:#45668e;display:inline-block\">|</span> <span if.bind=\"phone\" style=\"white-space:nowrap;display:inline-block\"><a href=\"http://www.vivvo.com\" target=\"_blank\" style=\"color:#8d8d8d;text-decoration:none\">www.vivvo.com</a></span></div><div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td align=\"left\" style=\"text-align:center\"><a href=\"http://www.vivvo.com\" target=\"_blank\"><img style=\"padding-top:5px\" height=\"16\" src=\"http://imgur.com/CSoTzzZ.png\"></a></td><td if.bind=\"facebook || linkedin || twitter || instagram\" align=\"left\" style=\"padding:5px;text-align:center\"><span style=\"color:#45668e;display:inline-block\">|</span></td><td if.bind=\"facebook\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"https://facebook.com/${facebook}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/2UJrwMf.png\"></a></td><td if.bind=\"linkedin\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"https://us.linkedin.com/in/${linkedin}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/ksLvq7c.png\"></a></td><td if.bind=\"twitter\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"https://twitter.com/${twitter}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/PZfIGAn.png\"></a></td><td if.bind=\"instagram\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"https://www.instagram.com/${instagram}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://imgur.com/AqphLeH.png\"></a></td></tr></tbody></table></div></td></tr></tbody></table></template>"; });
//# sourceMappingURL=app-bundle.js.map