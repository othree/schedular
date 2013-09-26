/*jslint vars: true, plusplus: true, forin: true */
/*global $: false, Schedular: false, Templates: false */

(function (root) {
    "use strict";

    var i;

    var defaults = function (options, defaults) {
        var opt;
        options = options || {};
        for (opt in defaults) {
            if (options[opt] === undefined) {
                options[opt] = defaults[opt];
            }
        }
        return options;
    };

    var Obj = function () {
        return {};
    };

    var Arr = function (len) {
        var array = [];
        for (i = 0; i < len; i++) {
            array.push(new Obj());
        }
        return array;
    };

    root.Schedular = function ($el, options) {
        this.$el = $el;
        this.init(defaults(options, {
            col: 2,
            row: 6
        }));
    };

    Schedular.prototype = {
        init: function (options) {
            var i;
            this.$el.append(Templates.base.r());
            this.$root = this.$el.find('.root');
            this.$colRoot = this.$el.find('.col-root');
            this.options = options;
            this.grid = [];
            this.row = 0;
            this.col = 0;
            for (i = 0; i < this.options.row; i++) {
                this.addRow();
            }
            for (i = 0; i < this.options.col; i++) {
                this.addCol();
            }
        },

        addRow: function () {
            this.row++;
            this.grid.push(new Arr(this.col));
            this.addRowNode();
        },
        addRowNode: function () {
            var i;
            var $row = $(Templates.row.r());
            for (i = 0; i < this.col; i++) {
                $row.append(Templates.cell.r());
            }
            this.$root.append($row);
            this.$colRoot.find('.col').each(function () {
                $(this).append(Templates.colcell.r());
            });
        },

        addCol: function () {
            var i;
            this.col++;
            for (i = 0; i < this.row; i++) {
                this.grid[i].push(new Obj());
            }
            this.addColNode();
        },
        addColNode: function () {
            var i;
            var $col = $(Templates.col.r());
            for (i = 0; i < this.row; i++) {
                $col.append(Templates.colcell.r());
            }
            this.$colRoot.append($col);
            this.$root.find('.row').each(function () {
                $(this).append(Templates.cell.r());
            });
        }
    };

}(this));
