/*!
 * Lightbox Gallery v1.0 (https://github.com/kawshar/lightboxgallery)
 * Copyright 2017 Kawshar Ahmed
 * Licensed GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 */
! function(a) {
    a.fn.lightboxgallery = function(b) {
        var c = {
            showCounter: !0,
            showTitle: !0,
            showDescription: !0
        };
        this.each(function() {
            b && a.extend(c, b);
            var d = this,
                e = function() {
                    this.items = a(d).parent().children(), this.count = this.items.length - 1, this.index = this.items.index(d), this.navPrev = "", this.navNext = "", this.loaded = !1, this.naturalWidth = 0, this.naturalHeight = 0, this.init = function() {
                        this.modal(), this.goto(this.index);
                        var b = this;
                        this.navNext.on("click", function(a) {
                            a.preventDefault(), b.next()
                        }), a(document).on("click", ".lightboxgallery-image", function(a) {
                            a.preventDefault(), b.next()
                        }), a(document).on("click", ".lightboxgallery-modal-wrapper, .lightboxgallery-close", function(a) {
                            a.target === this && (a.preventDefault(), b.close())
                        }), a(document).on("keyup", function(a) {
                            39 == a.keyCode && (a.preventDefault(), b.next()), 37 == a.keyCode && (a.preventDefault(), b.prev()), 27 == a.keyCode && (a.preventDefault(), b.close())
                        }), this.navPrev.on("click", function(a) {
                            a.preventDefault(), b.prev()
                        }), a(window).on("resize", function() {
                            var c = b.resize();
                            a(".lightboxgallery-modal").css({
                                width: c.width,
                                height: c.height
                            })
                        })
                    }, this.modal = function() {
                        a('<div id="lightboxgallery-modal" class="lightboxgallery-modal-wrapper"><a href="#" class="lightboxgallery-prev"><span></span></a><a href="#" class="lightboxgallery-next"><span></span></a><div class="lightboxgallery-modal"><div class="lightboxgallery-modal-body"></div></div></div>').appendTo(a("body").addClass("lightboxgallery-modal-open")), this.modal = a("#lightboxgallery-modal"), this.navNext = this.modal.find(".lightboxgallery-next"), this.navPrev = this.modal.find(".lightboxgallery-prev")
                    }, this.close = function() {
                        this.index = 0, this.loaded = !0, this.naturalWidth = 0, this.naturalHeight = 0, a("#lightboxgallery-modal").fadeOut(function() {
                            a(this).remove()
                        }), a(".lightboxgallery-modal").animate({
                            width: 100,
                            height: 100
                        }, 300, function() {
                            a(this).remove(), a("body").removeClass("lightboxgallery-modal-open")
                        })
                    }, this.resize = function() {
                        var b = a(window).width() - 80,
                            c = a(window).height() - 80,
                            d = 0,
                            e = this.naturalWidth,
                            f = this.naturalHeight;
                        return e > b && (d = b / e, f *= d, e *= d), f > c && (d = c / f, e *= d, f *= d), {
                            width: e,
                            height: f
                        }
                    }, this.next = function() {
                        this.index < this.count ? this.index = this.index + 1 : this.index = 0, this.goto(this.index)
                    }, this.prev = function() {
                        this.index > 0 ? this.index = this.index - 1 : this.index = this.count, this.goto(this.index)
                    }, this.goto = function(b) {
                        if (this.loaded === !1) {
                            var d = this,
                                e = a(this.items[b]);
                            d.loaded = !0, a(".lightboxgallery-modal-body").html('<div class="lightboxgallery-gallery-loading"></div>');
                            var f = a("<img />").attr("src", e.attr("href")).on("load", function() {
                                if (this.complete && "undefined" != typeof this.naturalWidth && 0 != this.naturalWidth) {
                                    d.naturalWidth = this.naturalWidth, d.naturalHeight = this.naturalHeight;
                                    var b = d.resize();
                                    a(".lightboxgallery-modal").animate({
                                        width: b.width,
                                        height: b.height
                                    }, 300, function() {
                                        var b = '<div class="lightboxgallery-image-wrapper">';
                                        b += '<img class="lightboxgallery-image" src="' + f[0].src + '" alt="' + e.attr("data-alt") + '">', (c.showCounter || c.showTitle && e.attr("data-title") || c.showDescription && e.attr("data-desc")) && (e.attr("data-title") || e.attr("data-description")) && (b += '<div class="lightboxgallery-image-content">', c.showCounter && (b += '<span class="lightboxgallery-gallery-stat">' + (d.index + 1) + " of " + (d.count + 1) + "</span>"), c.showTitle && e.attr("data-title") && (b += '<span class="lightboxgallery-image-title">' + e.attr("data-title") + "</span>"), c.showDescription && e.attr("data-desc") && (b += '<div class="lightboxgallery-image-description">' + e.attr("data-desc") + "</div>"), b += "</div>"), b += "</div>", a(".lightboxgallery-modal-body").html(b), d.modal.find(".lightboxgallery-close").removeClass("lightboxgallery-hidden"), d.loaded = !1
                                    })
                                } else;
                            })
                        }
                    }
                };
            (new e).init()
        })
    }
}(jQuery);