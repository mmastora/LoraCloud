webpackJsonp([1], {
    "+aT9": function (t, e) {
        t.exports = AMap
    }, "7p7d": function (t, e) {
    }, Btoz: function (t, e) {
    }, NHnr: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n("7+uW"), i = n("zL8q"), s = n.n(i), a = (n("tvR6"), {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {attrs: {id: "app"}}, [e("router-view")], 1)
            }, staticRenderFns: []
        });
        var o = n("VU/8")({name: "App"}, a, !1, function (t) {
            n("ueiY")
        }, null, null).exports, u = n("mtWM"), h = n.n(u);
        window.LOG = !1, window.shutUp = function () {
            window.LOG = !window.LOG
        };
        var c = h.a.create({timeout: 5e3});
        c.interceptors.request.use(function (t) {
            return t.url = "/action" + t.url, window.LOG && (console.group("Request"), console.log(t), console.groupEnd()), t
        }), c.interceptors.response.use(function (t) {
            return window.LOG && (console.group("Response"), console.log(t), console.groupEnd()), t
        });
        var l = c;

        function f() {
            return l({url: "/baseInfo/address", method: "post"})
        }

        var d = {
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("el-table", {
                    staticStyle: {width: "100%"},
                    attrs: {data: t.tableData4, height: "50vh"}
                }, [n("el-table-column", {
                    attrs: {
                        prop: "date",
                        label: "日期",
                        width: "100%"
                    }
                }), t._v(" "), n("el-table-column", {
                    attrs: {
                        prop: "address",
                        label: "地点",
                        width: "100%"
                    }
                }), t._v(" "), n("el-table-column", {
                    attrs: {
                        prop: "event",
                        label: "事件",
                        width: "100%"
                    }
                }), t._v(" "), n("el-table-column", {
                    attrs: {fixed: "right", label: "操作", width: "100%"},
                    scopedSlots: t._u([{
                        key: "default", fn: function (e) {
                            return [n("el-button", {
                                attrs: {type: "text", size: "small"},
                                nativeOn: {
                                    click: function (n) {
                                        n.preventDefault(), t.deleteRow(e.$index, t.tableData4)
                                    }
                                }
                            }, [t._v("\n          移除\n        ")])]
                        }
                    }])
                })], 1)
            }, staticRenderFns: []
        };
        var p = n("VU/8")({
            name: "infoBox", props: ["tableData4"], data: function () {
                return {}
            }, methods: {
                deleteRow: function (t, e) {
                    e.splice(t, 1)
                }
            }
        }, d, !1, function (t) {
            n("Sjqz")
        }, "data-v-9d85ce38", null).exports, v = n("+aT9"), y = n.n(v), g = {
            name: "gaoDeMap", data: function () {
                return {addressInfo: [], gaoDeMap: {}}
            }, mounted: function () {
                var t = this;
                this.gaoDeMap = new y.a.Map("container", {
                    pitch: 60,
                    rotation: 150,
                    resizeEnable: !0,
                    expandZoomRange: !0,
                    zooms: [17, 20],
                    viewMode: "3D"
                }), f().then(function (e) {
                    t.addressInfo = e.data, t.addressInfo.forEach(function (e) {
                        t.initMapPoint(e.name, e.agent, e.id, e.longitude, e.latitude), t.gaoDeMap.setFitView()
                    })
                })
            }, methods: {
                initMapPoint: function (t, e, n, r, i) {
                    var s = this;
                    new y.a.Marker({position: [r, i], map: this.gaoDeMap}).on("click", function (r) {
                        var i, a;
                        (i = {addressId: n}, a = i.addressId, l({
                            url: "/currentInfor/address/boxes?addressId=" + a,
                            method: "get"
                        })).then(function (n) {
                            var i = n.data, a = [], o = [];
                            a.push('<div><div style="padding:0px 0px 0px 4px;"><b>' + t + "</b>"), a.push("管理员" + e);
                            for (var u = (new Date).toLocaleString(), h = 0; h < i.length; h++) if (null !== i[h]) {
                                a.push(i[h].name + " " + i[h].value + " " + i[h].unit);
                                var c = {};
                                c.dataName = i[h].name, c.time = u, c.value = i[h].value + " " + i[h].unit, c.sensorName = "" + i[h].sensorName, c.addressId = i[h].addressId, o.push(c)
                            }
                            s.$emit("getCurrentInfo", o), new y.a.InfoWindow({
                                content: a.join("<br/>"),
                                offset: new y.a.Pixel(0, -30)
                            }).open(s.gaoDeMap, r.target.getPosition())
                        })
                    })
                }
            }
        }, m = {
            render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("div", {staticClass: "map", attrs: {id: "container"}})
            }, staticRenderFns: []
        };
        var S = n("VU/8")(g, m, !1, function (t) {
            n("Btoz")
        }, "data-v-0fe2197a", null).exports;
        var b = n("XLwt"), k = n.n(b), T = {
            name: "historyBox", props: ["historyData"], data: function () {
                return {chart: ""}
            }, methods: {
                initChart: function () {
                    var t = {
                        xAxis: {type: "category", data: this.historyData.historyTime},
                        yAxis: {type: "value"},
                        series: [{
                            data: this.historyData.historyHighData,
                            type: "line",
                            smooth: !0
                        }, {data: this.historyData.historyLowData, type: "line", smooth: !0}]
                    }, e = document.getElementsByClassName("et-chart"), n = e.length - 1;
                    this.chart = k.a.init(e[n]), this.chart.setOption(t)
                }
            }
        }, w = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticStyle: {width: "400px", height: "400px"},
                    attrs: {id: "historyBox"}
                }, [e("div", {staticClass: "et-chart", staticStyle: {width: "400px", height: "400px"}})])
            }]
        };
        var E = {
            name: "currentData", props: ["currentData"], data: function () {
                return {dialogVisible: !1, historyData: {}}
            }, methods: {
                getHistoryInfoForModel: function (t) {
                    var e, n, r, i = this;
                    (e = {
                        addressId: t.addressId,
                        sensorName: t.sensorName
                    }, n = e.addressId, r = e.sensorName, l({
                        url: "/historyData/address/boxes/sensor?addressId=" + n + "&sensorName=" + r,
                        method: "get"
                    })).then(function (t) {
                        var e = [], n = [], r = [];
                        t.data.forEach(function (t) {
                            e.push(t.time), n.push(t.highValue), r.push(t.lowValue)
                        }), i.historyData.historyTime = e, i.historyData.historyHighData = n, i.historyData.historyLowData = r, i.$refs.historyBox.initChart()
                    }), this.dialogVisible = !0
                }
            }, components: {
                historyBox: n("VU/8")(T, w, !1, function (t) {
                    n("7p7d")
                }, null, null).exports
            }
        }, D = {
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [n("el-table", {
                    staticStyle: {width: "100%"},
                    attrs: {data: t.currentData, height: "50vh"}
                }, [n("el-table-column", {
                    attrs: {
                        prop: "dataName",
                        label: "名称",
                        width: "100%"
                    }
                }), t._v(" "), n("el-table-column", {
                    attrs: {
                        prop: "time",
                        label: "时间",
                        width: "100%"
                    }
                }), t._v(" "), n("el-table-column", {
                    attrs: {
                        prop: "value",
                        label: "数值",
                        width: "100%"
                    }
                }), t._v(" "), n("el-table-column", {
                    attrs: {fixed: "right", label: "操作", width: "100%"},
                    scopedSlots: t._u([{
                        key: "default", fn: function (e) {
                            return [n("el-popover", {
                                attrs: {placement: "left", width: "500", trigger: "click"},
                                on: {"after-enter": t.initChart}
                            }, [n("history-box", {
                                ref: "historyBox",
                                attrs: {historyData: t.historyData}
                            }), t._v(" "), n("el-button", {
                                attrs: {slot: "reference", type: "text", size: "small"},
                                nativeOn: {
                                    click: function (n) {
                                        n.preventDefault(), t.getHistoryInfoForModel(e.row)
                                    }
                                },
                                slot: "reference"
                            }, [t._v("\n            历史数据\n          ")])], 1)]
                        }
                    }])
                })], 1)], 1)
            }, staticRenderFns: []
        };
        var x = n("VU/8")(E, D, !1, function (t) {
                n("m/pD")
            }, "data-v-324c2c14", null).exports, A = n("pFYg"), _ = n.n(A), B = n("HSQo"), R = n.n(B), P = n("d7EF"),
            C = n.n(P), I = n("woOf"), O = n.n(I), L = n("fZjL"), N = n.n(L), M = n("Xxa5"), U = n.n(M), V = n("exGp"),
            q = n.n(V), F = n("c/Tr"), H = n.n(F), j = n("Zx67"), G = n.n(j), z = n("zwoO"), K = n.n(z), W = n("yEsh"),
            Z = n.n(W), $ = n("Pf15"), Y = n.n($), Q = n("//Fk"), J = n.n(Q), X = n("lHA8"), tt = n.n(X),
            et = n("BO1k"), nt = n.n(et), rt = n("5QVw"), it = n.n(rt), st = n("ifoU"), at = n.n(st), ot = n("bOdI"),
            ut = n.n(ot), ht = n("Zrlr"), ct = n.n(ht), lt = n("wxAW"), ft = n.n(lt);
        !function () {
            var t = 0, e = 1, n = 2, r = 3, i = r;
            var s = function () {
                function s() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i, e = arguments[1];
                    ct()(this, s), this.tag = e, this.setLevel(t)
                }

                return ft()(s, [{
                    key: "setLevel", value: function (t) {
                        this.level = t
                    }
                }, {
                    key: "_log", value: function (t, e) {
                        e = Array.prototype.slice.call(e), this.tag && e.unshift("[" + this.tag + "]"), this.level >= t && console[s.level_map[t]].apply(console, e)
                    }
                }, {
                    key: "log", value: function () {
                        this._log(n, arguments)
                    }
                }, {
                    key: "debug", value: function () {
                        this._log(r, arguments)
                    }
                }, {
                    key: "error", value: function () {
                        this._log(t, arguments)
                    }
                }, {
                    key: "warn", value: function () {
                        this._log(e, arguments)
                    }
                }], [{
                    key: "level_map", get: function () {
                        var i;
                        return i = {}, ut()(i, r, "log"), ut()(i, n, "log"), ut()(i, e, "warn"), ut()(i, t, "error"), i
                    }
                }]), s
            }(), a = new at.a;

            function o(t) {
                return a.has(t) || a.set(t, new s(i, t)), a.get(t)
            }

            var u = new s, h = function () {
                function t() {
                    ct()(this, t)
                }

                return ft()(t, null, [{
                    key: "parse", value: function (e) {
                        var n = {}, r = /^([^:]+):\/\/([^\/]+)(.*)$/.exec(e);
                        if (!r) throw new Error("bad url");
                        n.full = e, n.protocol = r[1], n.urlpath = r[3];
                        var i = n.urlpath.split("/");
                        n.basename = i.pop().split(/\?|#/)[0], n.basepath = i.join("/");
                        var s = r[2].split("@"), a = s[0].split(":"), o = [null, null];
                        return 2 === s.length && (o = s[0].split(":"), a = s[1].split(":")), n.user = o[0], n.pass = o[1], n.host = a[0], n.auth = n.user && n.pass ? n.user + ":" + n.pass : "", n.port = null == a[1] ? t.protocolDefaultPort(n.protocol) : a[1], n.portDefined = null != a[1], n.location = n.host + ":" + n.port, "unix" == n.protocol && (n.socket = n.port, n.port = void 0), n
                    }
                }, {
                    key: "full", value: function (t) {
                        return t.protocol + "://" + t.location + "/" + t.urlpath
                    }
                }, {
                    key: "isAbsolute", value: function (t) {
                        return /^[^:]+:\/\//.test(t)
                    }
                }, {
                    key: "protocolDefaultPort", value: function (t) {
                        switch (t) {
                            case"rtsp":
                                return 554;
                            case"http":
                                return 80;
                            case"https":
                                return 443
                        }
                        return 0
                    }
                }]), t
            }(), c = it()("event_listener"), l = it()("event_listeners"), f = function () {
                function t(e) {
                    ct()(this, t), this[c] = e, this[l] = new at.a
                }

                return ft()(t, [{
                    key: "clear", value: function () {
                        if (this[l]) {
                            var t = !0, e = !1, n = void 0;
                            try {
                                for (var r, i = nt()(this[l]); !(t = (r = i.next()).done); t = !0) {
                                    var s = r.value, a = !0, o = !1, u = void 0;
                                    try {
                                        for (var h, f = nt()(s[1]); !(a = (h = f.next()).done); a = !0) {
                                            var d = h.value;
                                            this[c].removeEventListener(s[0], d)
                                        }
                                    } catch (t) {
                                        o = !0, u = t
                                    } finally {
                                        try {
                                            !a && f.return && f.return()
                                        } finally {
                                            if (o) throw u
                                        }
                                    }
                                }
                            } catch (t) {
                                e = !0, n = t
                            } finally {
                                try {
                                    !t && i.return && i.return()
                                } finally {
                                    if (e) throw n
                                }
                            }
                        }
                        this[l].clear()
                    }
                }, {
                    key: "destroy", value: function () {
                        this.clear(), this[l] = null
                    }
                }, {
                    key: "on", value: function (t, e, n) {
                        return void 0 == n && (n = e, e = null), e ? this.addEventListener(t, function (t) {
                            t.target.matches(e) && n(t)
                        }) : this.addEventListener(t, n)
                    }
                }, {
                    key: "addEventListener", value: function (t, e) {
                        return this[l].has(t) || this[l].set(t, new tt.a), this[l].get(t).add(e), this[c].addEventListener(t, e, !1), e
                    }
                }, {
                    key: "removeEventListener", value: function (t, e) {
                        if (this[c].removeEventListener(t, e, !1), this[l].has(t)) {
                            var n = this[l].get(t);
                            n.delete(e), n.size || this[l].delete(t)
                        }
                    }
                }, {
                    key: "dispatchEvent", value: function (t) {
                        this[c] && this[c].dispatchEvent(t)
                    }
                }]), t
            }(), d = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    ct()(this, t), this[c] = new f(e || document.createElement("div"))
                }

                return ft()(t, [{
                    key: "clear", value: function () {
                        this[c] && this[c].clear()
                    }
                }, {
                    key: "destroy", value: function () {
                        this[c] && (this[c].destroy(), this[c] = null)
                    }
                }, {
                    key: "on", value: function (t, e, n) {
                        return this[c] ? this[c].on(t, e, n) : null
                    }
                }, {
                    key: "addEventListener", value: function (t, e) {
                        return this[c] ? this[c].addEventListener(t, e, !1) : null
                    }
                }, {
                    key: "removeEventListener", value: function (t, e) {
                        this[c] && this[c].removeEventListener(t, e, !1)
                    }
                }, {
                    key: "dispatchEvent", value: function (t, e) {
                        this[c] && this[c].dispatchEvent(new CustomEvent(t, {detail: e}))
                    }
                }]), t
            }(), p = function () {
                function t(e) {
                    ct()(this, t), this.eventSource = e, this[l] = new at.a
                }

                return ft()(t, [{
                    key: "on", value: function (t, e, n) {
                        this[l].has(t) || this[l].set(t, new tt.a);
                        var r = this.eventSource.on(t, e, n);
                        r && this[l].get(t).add(r)
                    }
                }, {
                    key: "off", value: function (t, e) {
                        this.eventSource.removeEventListener(t, e)
                    }
                }, {
                    key: "clear", value: function () {
                        this.eventSource.clear(), this[l].clear()
                    }
                }, {
                    key: "destroy", value: function () {
                        this.eventSource.clear(), this[l] = null, this.eventSource = null
                    }
                }]), t
            }(), v = function () {
                function t() {
                    ct()(this, t)
                }

                return ft()(t, null, [{
                    key: "init", value: function () {
                        var e;
                        for (e in t.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            mvex: [],
                            mvhd: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        }, t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                        var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                            r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                        t.HDLR_TYPES = {video: n, audio: r};
                        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                            s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                        t.STTS = t.STSC = t.STCO = s, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                        var a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]),
                            u = new Uint8Array([0, 0, 0, 1]);
                        t.FTYP = t.box(t.types.ftyp, a, u, a, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, i))
                    }
                }, {
                    key: "box", value: function (t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        for (var i, s = 8, a = n.length, o = a; a--;) s += n[a].byteLength;
                        for ((i = new Uint8Array(s))[0] = s >> 24 & 255, i[1] = s >> 16 & 255, i[2] = s >> 8 & 255, i[3] = 255 & s, i.set(t, 4), a = 0, s = 8; a < o; ++a) i.set(n[a], s), s += n[a].byteLength;
                        return i
                    }
                }, {
                    key: "hdlr", value: function (e) {
                        return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                    }
                }, {
                    key: "mdat", value: function (e) {
                        return t.box(t.types.mdat, e)
                    }
                }, {
                    key: "mdhd", value: function (e, n) {
                        return t.box(t.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                    }
                }, {
                    key: "mdia", value: function (e) {
                        return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                    }
                }, {
                    key: "mfhd", value: function (e) {
                        return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                    }
                }, {
                    key: "minf", value: function (e) {
                        return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                    }
                }, {
                    key: "moof", value: function (e, n, r) {
                        return t.box(t.types.moof, t.mfhd(e), t.traf(r, n))
                    }
                }, {
                    key: "moov", value: function (e, n, r) {
                        for (var i = e.length, s = []; i--;) s[i] = t.trak(e[i]);
                        return t.box.apply(null, [t.types.moov, t.mvhd(r, n)].concat(s).concat(t.mvex(e)))
                    }
                }, {
                    key: "mvex", value: function (e) {
                        for (var n = e.length, r = []; n--;) r[n] = t.trex(e[n]);
                        return t.box.apply(null, [t.types.mvex].concat(r))
                    }
                }, {
                    key: "mvhd", value: function (e, n) {
                        var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                        return t.box(t.types.mvhd, r)
                    }
                }, {
                    key: "sdtp", value: function (e) {
                        var n, r, i = e.samples || [], s = new Uint8Array(4 + i.length);
                        for (r = 0; r < i.length; r++) n = i[r].flags, s[r + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
                        return t.box(t.types.sdtp, s)
                    }
                }, {
                    key: "stbl", value: function (e) {
                        return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                    }
                }, {
                    key: "avc1", value: function (e) {
                        var n, r, i, s = [], a = [];
                        for (n = 0; n < e.sps.length; n++) i = (r = e.sps[n]).byteLength, s.push(i >>> 8 & 255), s.push(255 & i), s = s.concat(Array.prototype.slice.call(r));
                        for (n = 0; n < e.pps.length; n++) i = (r = e.pps[n]).byteLength, a.push(i >>> 8 & 255), a.push(255 & i), a = a.concat(Array.prototype.slice.call(r));
                        var o = t.box(t.types.avcC, new Uint8Array([1, s[3], s[4], s[5], 255, 224 | e.sps.length].concat(s).concat([e.pps.length]).concat(a))),
                            u = e.width, h = e.height;
                        return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, u >> 8 & 255, 255 & u, h >> 8 & 255, 255 & h, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 98, 105, 110, 101, 108, 112, 114, 111, 46, 114, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                    }
                }, {
                    key: "esds", value: function (t) {
                        var e = t.config.byteLength, n = new Uint8Array(26 + e + 3);
                        return n.set([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, e]), n.set(t.config, 26), n.set([6, 1, 2], 26 + e), n
                    }
                }, {
                    key: "mp4a", value: function (e) {
                        var n = e.audiosamplerate;
                        return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0]), t.box(t.types.esds, t.esds(e)))
                    }
                }, {
                    key: "stsd", value: function (e) {
                        return "audio" === e.type ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                    }
                }, {
                    key: "tkhd", value: function (e) {
                        var n = e.id, r = e.duration, i = e.width, s = e.height, a = e.volume;
                        return t.box(t.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, a >> 0 & 255, a % 1 * 10 >> 0 & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
                    }
                }, {
                    key: "traf", value: function (e, n) {
                        var r = t.sdtp(e), i = e.id;
                        return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), t.box(t.types.tfdt, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.trun(e, r.length + 16 + 16 + 8 + 16 + 8 + 8), r)
                    }
                }, {
                    key: "trak", value: function (e) {
                        return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                    }
                }, {
                    key: "trex", value: function (e) {
                        var n = e.id;
                        return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                    }
                }, {
                    key: "trun", value: function (e, n) {
                        var r, i, s, a, o, u, h = e.samples || [], c = h.length, l = 12 + 16 * c, f = new Uint8Array(l);
                        for (n += 8 + l, f.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n], 0), r = 0; r < c; r++) s = (i = h[r]).duration, a = i.size, o = i.flags, u = i.cts, f.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u], 12 + 16 * r);
                        return t.box(t.types.trun, f)
                    }
                }, {
                    key: "initSegment", value: function (e, n, r) {
                        t.types || t.init();
                        var i, s = t.moov(e, n, r);
                        return (i = new Uint8Array(t.FTYP.byteLength + s.byteLength)).set(t.FTYP), i.set(s, t.FTYP.byteLength), i
                    }
                }]), t
            }(), y = o("mse"), g = function () {
                function t(e, n) {
                    var r = this;
                    ct()(this, t), this.mediaSource = e.mediaSource, this.players = e.players, this.cleaning = !1, this.parent = e, this.queue = [], this.cleanResolvers = [], this.codec = n, this.cleanRanges = [], y.debug("Use codec: " + n), this.sourceBuffer = this.mediaSource.addSourceBuffer(n), this.eventSource = new d(this.sourceBuffer), this.eventSource.addEventListener("updatestart", function (t) {
                        r.cleaning && y.debug(r.codec + " cleaning start")
                    }), this.eventSource.addEventListener("update", function (t) {
                        r.cleaning && y.debug(r.codec + " cleaning update")
                    }), this.eventSource.addEventListener("updateend", function (t) {
                        if (r.cleaning) {
                            y.debug(r.codec + " cleaning end");
                            try {
                                r.sourceBuffer.buffered.length && r.players[0].currentTime < r.sourceBuffer.buffered.start(0) && (r.players[0].currentTime = r.sourceBuffer.buffered.start(0))
                            } catch (t) {
                            }
                            for (; r.cleanResolvers.length;) {
                                r.cleanResolvers.shift()()
                            }
                            if (r.cleaning = !1, r.cleanRanges.length) return void r.doCleanup()
                        }
                        r.feedNext()
                    }), this.eventSource.addEventListener("error", function (t) {
                        y.debug("Source buffer error: " + r.mediaSource.readyState), r.mediaSource.sourceBuffers.length && r.mediaSource.removeSourceBuffer(r.sourceBuffer), r.parent.eventSource.dispatchEvent("error")
                    }), this.eventSource.addEventListener("abort", function (t) {
                        y.debug("Source buffer aborted: " + r.mediaSource.readyState), r.mediaSource.sourceBuffers.length && r.mediaSource.removeSourceBuffer(r.sourceBuffer), r.parent.eventSource.dispatchEvent("error")
                    }), this.sourceBuffer.updating || this.feedNext()
                }

                return ft()(t, [{
                    key: "destroy", value: function () {
                        this.eventSource.destroy(), this.clear(), this.queue = [], this.mediaSource.removeSourceBuffer(this.sourceBuffer)
                    }
                }, {
                    key: "clear", value: function () {
                        var t = this;
                        this.queue = [];
                        for (var e = [], n = function (n) {
                            t.cleaning = !0, e.push(new J.a(function (e, r) {
                                t.cleanResolvers.push(e), t.sourceBuffer.updating ? t.sourceBuffer.onupdateend = function () {
                                    t.sourceBuffer && t.sourceBuffer.remove(t.sourceBuffer.buffered.start(n), t.sourceBuffer.buffered.end(n)), e()
                                } : (t.sourceBuffer.remove(t.sourceBuffer.buffered.start(n), t.sourceBuffer.buffered.end(n)), e())
                            }))
                        }, r = 0; r < this.sourceBuffer.buffered.length; ++r) n(r);
                        return J.a.all(e)
                    }
                }, {
                    key: "setLive", value: function (t) {
                        this.is_live = t
                    }
                }, {
                    key: "feedNext", value: function () {
                        this.sourceBuffer.updating || this.cleaning || !this.queue.length || this.doAppend(this.queue.shift())
                    }
                }, {
                    key: "doCleanup", value: function () {
                        if (!this.cleanRanges.length) return this.cleaning = !1, void this.feedNext();
                        var t = this.cleanRanges.shift();
                        y.debug(this.codec + " remove range [" + t[0] + " - " + t[1] + "). \n                    \nUpdating: " + this.sourceBuffer.updating + "\n                    "), this.cleaning = !0, this.sourceBuffer.remove(t[0], t[1])
                    }
                }, {
                    key: "initCleanup", value: function () {
                        if (!this.sourceBuffer.buffered.length || this.sourceBuffer.updating || this.cleaning) this.feedNext(); else {
                            y.debug(this.codec + " cleanup");
                            for (var t = this.sourceBuffer.buffered.end(this.sourceBuffer.buffered.length - 1) - 2, e = 0; e < this.sourceBuffer.buffered.length; ++e) {
                                var n = this.sourceBuffer.buffered.start(e), r = this.sourceBuffer.buffered.end(e);
                                this.players[0].currentTime <= n || t <= n || (t <= r && t >= n ? (y.debug("Clear [" + n + ", " + t + "), leave [" + t + ", " + r + "]"), (r = t) != n && this.cleanRanges.push([n, r])) : this.cleanRanges.push([n, r]))
                            }
                            this.doCleanup()
                        }
                    }
                }, {
                    key: "doAppend", value: function (t) {
                        var e = this.players[0].error;
                        if (e) {
                            y.error("Error occured: " + m.ErrorNotes[e.code]);
                            try {
                                this.players.forEach(function (t) {
                                    t.stop()
                                }), this.mediaSource.endOfStream()
                            } catch (t) {
                            }
                            this.parent.eventSource.dispatchEvent("error")
                        } else try {
                            this.sourceBuffer.appendBuffer(t)
                        } catch (e) {
                            if ("QuotaExceededError" === e.name) return y.debug(this.codec + " quota fail"), this.queue.unshift(t), void this.initCleanup();
                            y.error("Error occured while appending buffer. " + e.name + ": " + e.message), this.parent.eventSource.dispatchEvent("error")
                        }
                    }
                }, {
                    key: "feed", value: function (t) {
                        this.queue = this.queue.concat(t), !this.sourceBuffer || this.sourceBuffer.updating || this.cleaning || this.feedNext()
                    }
                }]), t
            }(), m = function () {
                function t(e) {
                    ct()(this, t), this.players = e;
                    var n = this.players.map(function (t, e) {
                        return t.onplaying = function () {
                            n[e] = !0
                        }, t.onpause = function () {
                            n[e] = !1
                        }, !t.paused
                    });
                    this.playing = n, this.mediaSource = new MediaSource, this.eventSource = new d(this.mediaSource), this.reset()
                }

                return ft()(t, null, [{
                    key: "isSupported", value: function (t) {
                        return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="' + t.join(",") + '"')
                    }
                }, {
                    key: "ErrorNotes", get: function () {
                        var t;
                        return t = {}, ut()(t, MediaError.MEDIA_ERR_ABORTED, "fetching process aborted by user"), ut()(t, MediaError.MEDIA_ERR_NETWORK, "error occurred when downloading"), ut()(t, MediaError.MEDIA_ERR_DECODE, "error occurred when decoding"), ut()(t, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, "audio/video not supported"), t
                    }
                }]), ft()(t, [{
                    key: "destroy", value: function () {
                        this.reset(), this.eventSource.destroy(), this.mediaSource = null, this.eventSource = null
                    }
                }, {
                    key: "play", value: function () {
                        var t = this;
                        this.players.forEach(function (e, n) {
                            e.paused && !t.playing[n] && (y.debug("player " + n + ": play"), e.play())
                        })
                    }
                }, {
                    key: "setLive", value: function (t) {
                        for (var e in this.buffers) this.buffers[e].setLive(t);
                        this.is_live = t
                    }
                }, {
                    key: "resetBuffers", value: function () {
                        var t = this;
                        this.players.forEach(function (e, n) {
                            !e.paused && t.playing[n] && (e.pause(), e.currentTime = 0)
                        });
                        var e = [], n = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = nt()(this.buffers.values()); !(n = (s = a.next()).done); n = !0) {
                                var o = s.value;
                                e.push(o.clear())
                            }
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return J.a.all(e).then(function () {
                            t.mediaSource.endOfStream(), t.mediaSource.duration = 0, t.mediaSource.clearLiveSeekableRange(), t.play()
                        })
                    }
                }, {
                    key: "clear", value: function () {
                        var t = this;
                        return this.reset(), this.players.forEach(function (e) {
                            e.src = URL.createObjectURL(t.mediaSource)
                        }), this.setupEvents()
                    }
                }, {
                    key: "setupEvents", value: function () {
                        var t = this;
                        return this.eventSource.clear(), this.resolved = !1, this.mediaReady = new J.a(function (e, n) {
                            t._sourceOpen = function () {
                                y.debug("Media source opened: " + t.mediaSource.readyState), t.resolved || (t.resolved = !0, e())
                            }, t._sourceEnded = function () {
                                y.debug("Media source ended: " + t.mediaSource.readyState)
                            }, t._sourceClose = function () {
                                y.debug("Media source closed: " + t.mediaSource.readyState), t.resolved && t.eventSource.dispatchEvent("sourceclosed")
                            }, t.eventSource.addEventListener("sourceopen", t._sourceOpen), t.eventSource.addEventListener("sourceended", t._sourceEnded), t.eventSource.addEventListener("sourceclose", t._sourceClose)
                        }), this.mediaReady
                    }
                }, {
                    key: "reset", value: function () {
                        for (var t in this.ready = !1, this.buffers) this.buffers[t].destroy(), delete this.buffers[t];
                        "open" == this.mediaSource.readyState && (this.mediaSource.duration = 0, this.mediaSource.endOfStream()), this.updating = !1, this.resolved = !1, this.buffers = {}
                    }
                }, {
                    key: "setCodec", value: function (t, e) {
                        var n = this;
                        return this.mediaReady.then(function () {
                            n.buffers[t] = new g(n, e), n.buffers[t].setLive(n.is_live)
                        })
                    }
                }, {
                    key: "feed", value: function (t, e) {
                        this.buffers[t] && this.buffers[t].feed(e)
                    }
                }]), t
            }(), S = o("remuxer:base"), b = 1, k = function () {
                function t(e, n, r) {
                    ct()(this, t), this.timeOffset = 0, this.timescale = e, this.scaleFactor = n, this.readyToDecode = !1, this.samples = [], this.seq = 1, this.tsAlign = 1
                }

                return ft()(t, null, [{
                    key: "getTrackID", value: function () {
                        return b++
                    }
                }, {
                    key: "MP4_TIMESCALE", get: function () {
                        return 9e4
                    }
                }]), ft()(t, [{
                    key: "scaled", value: function (t) {
                        return t / this.scaleFactor
                    }
                }, {
                    key: "unscaled", value: function (t) {
                        return t * this.scaleFactor
                    }
                }, {
                    key: "remux", value: function (t) {
                        return !!t && (this.samples.push({unit: t, pts: t.pts, dts: t.dts}), !0)
                    }
                }, {
                    key: "setConfig", value: function (t) {
                    }
                }, {
                    key: "insertDscontinuity", value: function () {
                        this.samples.push(null)
                    }
                }, {
                    key: "init", value: function (t, e) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        this.initPTS = Math.min(t, this.samples[0].dts), this.initDTS = Math.min(e, this.samples[0].dts), S.debug("Initial pts=" + this.initPTS + " dts=" + this.initDTS + " offset=" + this.unscaled(this.timeOffset)), this.initialized = n
                    }
                }, {
                    key: "flush", value: function () {
                        this.seq++, this.mp4track.len = 0, this.mp4track.samples = []
                    }
                }, {
                    key: "getPayloadBase", value: function (e, n) {
                        return this.readyToDecode && this.initialized && this.samples.length ? (this.samples.sort(t.dtsSortFunc), !0) : null
                    }
                }], [{
                    key: "toMS", value: function (t) {
                        return t / 90
                    }
                }, {
                    key: "dtsSortFunc", value: function (t, e) {
                        return t.dts - e.dts
                    }
                }]), t
            }(), T = o("remuxer:aac"), w = function (t) {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    ct()(this, e);
                    var i = K()(this, (e.__proto__ || G()(e)).call(this, t, n));
                    return i.codecstring = m.CODEC_AAC, i.units = [], i.initDTS = void 0, i.nextAacPts = void 0, i.lastPts = 0, i.firstDTS = 0, i.firstPTS = 0, i.duration = r.duration || 1, i.initialized = !1, i.mp4track = {
                        id: k.getTrackID(),
                        type: "audio",
                        fragmented: !0,
                        channelCount: 0,
                        audiosamplerate: i.timescale,
                        duration: 0,
                        timescale: i.timescale,
                        volume: 1,
                        samples: [],
                        config: "",
                        len: 0
                    }, r.config && i.setConfig(r.config), i
                }

                return Y()(e, t), ft()(e, [{
                    key: "setConfig", value: function (t) {
                        this.mp4track.channelCount = t.channels, this.mp4track.audiosamplerate = t.samplerate, this.mp4track.duration || (this.mp4track.duration = (this.duration ? this.duration : 1) * t.samplerate), this.mp4track.timescale = t.samplerate, this.mp4track.config = t.config, this.mp4track.codec = t.codec, this.timescale = t.samplerate, this.scaleFactor = k.MP4_TIMESCALE / t.samplerate, this.expectedSampleDuration = 1024 * this.scaleFactor, this.readyToDecode = !0
                    }
                }, {
                    key: "remux", value: function (t) {
                        Z()(e.prototype.__proto__ || G()(e.prototype), "remux", this).call(this, t) && (this.mp4track.len += t.getSize())
                    }
                }, {
                    key: "getPayload", value: function () {
                        if (!this.readyToDecode || !this.samples.length) return null;
                        this.samples.sort(function (t, e) {
                            return t.dts - e.dts
                        });
                        for (var t = new Uint8Array(this.mp4track.len), e = 0, n = this.mp4track.samples, r = void 0, i = void 0, s = void 0, a = void 0; this.samples.length;) {
                            var o = this.samples.shift();
                            if (null === o) {
                                this.nextDts = void 0;
                                break
                            }
                            var u = o.unit;
                            if (s = o.pts - this.initDTS, a = o.dts - this.initDTS, void 0 === i) {
                                if (this.nextDts) {
                                    var h = Math.round(this.scaled(s - this.nextAacPts));
                                    if (Math.abs(h) < 600 && h) {
                                        if (h > 0) T.log(h + " ms hole between AAC samples detected,filling it"); else if (h < -12) {
                                            T.log(-h + " ms overlapping between AAC samples detected, drop frame"), this.mp4track.len -= u.getSize();
                                            continue
                                        }
                                        s = a = this.nextAacPts
                                    }
                                }
                                this.firstDTS = Math.max(0, a)
                            }
                            r = {
                                size: u.getSize(),
                                cts: 0,
                                duration: 1024,
                                flags: {isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1}
                            }, t.set(u.getData(), e), e += u.getSize(), n.push(r), i = a
                        }
                        return n.length ? (this.nextDts = s + this.expectedSampleDuration, new Uint8Array(t.buffer, 0, this.mp4track.len)) : null
                    }
                }]), e
            }(k), E = function () {
                function t(e) {
                    ct()(this, t), this.data = e, this.bytesAvailable = this.data.byteLength, this.word = 0, this.bitsAvailable = 0
                }

                return ft()(t, [{
                    key: "loadWord", value: function () {
                        var t = this.data.byteLength - this.bytesAvailable, e = new Uint8Array(4),
                            n = Math.min(4, this.bytesAvailable);
                        if (0 === n) throw new Error("no bytes available");
                        e.set(this.data.subarray(t, t + n)), this.word = new DataView(e.buffer, e.byteOffset, e.byteLength).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
                    }
                }, {
                    key: "skipBits", value: function (t) {
                        var e;
                        this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) << 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                    }
                }, {
                    key: "readBits", value: function (t) {
                        var e = Math.min(this.bitsAvailable, t), n = this.word >>> 32 - e;
                        return t > 32 && u.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), (e = t - e) > 0 ? n << e | this.readBits(e) : n
                    }
                }, {
                    key: "skipLZ", value: function () {
                        var t;
                        for (t = 0; t < this.bitsAvailable; ++t) if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                        return this.loadWord(), t + this.skipLZ()
                    }
                }, {
                    key: "skipUEG", value: function () {
                        this.skipBits(1 + this.skipLZ())
                    }
                }, {
                    key: "skipEG", value: function () {
                        this.skipBits(1 + this.skipLZ())
                    }
                }, {
                    key: "readUEG", value: function () {
                        var t = this.skipLZ();
                        return this.readBits(t + 1) - 1
                    }
                }, {
                    key: "readEG", value: function () {
                        var t = this.readUEG();
                        return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                    }
                }, {
                    key: "readBoolean", value: function () {
                        return 1 === this.readBits(1)
                    }
                }, {
                    key: "readUByte", value: function () {
                        return this.readBits(8)
                    }
                }, {
                    key: "readUShort", value: function () {
                        return this.readBits(16)
                    }
                }, {
                    key: "readUInt", value: function () {
                        return this.readBits(32)
                    }
                }]), t
            }();

            function D(t) {
                for (var e = window.atob(t), n = e.length, r = new Uint8Array(n), i = 0; i < n; i++) r[i] = e.charCodeAt(i);
                return r.buffer
            }

            function x(t) {
                for (var e = t.length >> 1, n = new Uint8Array(e), r = 0; r < e; r++) n[r] = parseInt(t.substr(r << 1, 2), 16);
                return n
            }

            var A = function () {
                function t(e) {
                    ct()(this, t), this.src = new DataView(e.buffer, e.byteOffset, e.byteLength), this.bitpos = 0, this.byte = this.src.getUint8(0), this.bytepos = 0
                }

                return ft()(t, [{
                    key: "readBits", value: function (t) {
                        if (32 < (0 | t) || 0 == (0 | t)) throw new Error("too big");
                        for (var e = 0, n = t; n > 0; --n) e = (0 | e) << 1 | (0 | this.byte) >> 8 - ++this.bitpos & 1, (0 | this.bitpos) >= 8 && (this.byte = this.src.getUint8(++this.bytepos), this.bitpos &= 7);
                        return e
                    }
                }, {
                    key: "skipBits", value: function (t) {
                        return this.bitpos += 7 & (0 | t), this.bytepos += (0 | t) >>> 3, this.bitpos > 7 && (this.bitpos &= 7, ++this.bytepos), this.finished() ? this.bytepos - this.src.byteLength - this.src.bitpos : (this.byte = this.src.getUint8(this.bytepos), 0)
                    }
                }, {
                    key: "finished", value: function () {
                        return this.bytepos >= this.src.byteLength
                    }
                }]), t
            }(), B = function () {
                function t(e, n, r, i, s) {
                    ct()(this, t), this.data = r, this.ntype = e, this.nri = n, this.dts = i, this.pts = s || this.dts, this.sliceType = null
                }

                return ft()(t, null, [{
                    key: "type", value: function (e) {
                        return e.ntype in t.TYPES ? t.TYPES[e.ntype] : "UNKNOWN"
                    }
                }, {
                    key: "NDR", get: function () {
                        return 1
                    }
                }, {
                    key: "SLICE_PART_A", get: function () {
                        return 2
                    }
                }, {
                    key: "SLICE_PART_B", get: function () {
                        return 3
                    }
                }, {
                    key: "SLICE_PART_C", get: function () {
                        return 4
                    }
                }, {
                    key: "IDR", get: function () {
                        return 5
                    }
                }, {
                    key: "SEI", get: function () {
                        return 6
                    }
                }, {
                    key: "SPS", get: function () {
                        return 7
                    }
                }, {
                    key: "PPS", get: function () {
                        return 8
                    }
                }, {
                    key: "DELIMITER", get: function () {
                        return 9
                    }
                }, {
                    key: "EOSEQ", get: function () {
                        return 10
                    }
                }, {
                    key: "EOSTR", get: function () {
                        return 11
                    }
                }, {
                    key: "FILTER", get: function () {
                        return 12
                    }
                }, {
                    key: "STAP_A", get: function () {
                        return 24
                    }
                }, {
                    key: "STAP_B", get: function () {
                        return 25
                    }
                }, {
                    key: "FU_A", get: function () {
                        return 28
                    }
                }, {
                    key: "FU_B", get: function () {
                        return 29
                    }
                }, {
                    key: "TYPES", get: function () {
                        var e;
                        return e = {}, ut()(e, t.IDR, "IDR"), ut()(e, t.SEI, "SEI"), ut()(e, t.SPS, "SPS"), ut()(e, t.PPS, "PPS"), ut()(e, t.NDR, "NDR"), e
                    }
                }]), ft()(t, [{
                    key: "appendData", value: function (t) {
                        var e, n, r;
                        this.data = (e = this.data, n = t, (r = new Uint8Array((0 | e.byteLength) + (0 | n.byteLength))).set(e, 0), r.set(n, 0 | e.byteLength), r)
                    }
                }, {
                    key: "toString", value: function () {
                        return t.type(this) + "(" + this.data.byteLength + "): NRI: " + this.getNri() + ", PTS: " + this.pts + ", DTS: " + this.dts
                    }
                }, {
                    key: "getNri", value: function () {
                        return this.nri >> 5
                    }
                }, {
                    key: "type", value: function () {
                        return this.ntype
                    }
                }, {
                    key: "isKeyframe", value: function () {
                        return this.ntype === t.IDR || 7 === this.sliceType
                    }
                }, {
                    key: "getSize", value: function () {
                        return 5 + this.data.byteLength
                    }
                }, {
                    key: "getData", value: function () {
                        var t = new Uint8Array(5 + this.data.byteLength), e = new DataView(t.buffer);
                        return e.setUint32(0, this.data.byteLength + 1), e.setUint8(4, 0 | 96 & this.nri | 31 & this.ntype), t.set(this.data, 5), t
                    }
                }]), t
            }(), P = function () {
                function t(e) {
                    ct()(this, t), this.remuxer = e, this.track = e.mp4track, this.firstFound = !1
                }

                return ft()(t, [{
                    key: "msToScaled", value: function (t) {
                        return (t - this.remuxer.timeOffset) * this.remuxer.scaleFactor
                    }
                }, {
                    key: "parseSPS", value: function (e) {
                        var n = t.readSPS(new Uint8Array(e));
                        this.track.width = n.width, this.track.height = n.height, this.track.sps = [new Uint8Array(e)], this.track.codec = "avc1.";
                        for (var r = new DataView(e.buffer, e.byteOffset + 1, 4), i = 0; i < 3; ++i) {
                            var s = r.getUint8(i).toString(16);
                            s.length < 2 && (s = "0" + s), this.track.codec += s
                        }
                    }
                }, {
                    key: "parsePPS", value: function (t) {
                        this.track.pps = [new Uint8Array(t)]
                    }
                }, {
                    key: "parseNAL", value: function (e) {
                        if (!e) return !1;
                        var n = null;
                        switch (e.type()) {
                            case B.NDR:
                            case B.IDR:
                                e.sliceType = t.parceSliceHeader(e.data), e.isKeyframe() && !this.firstFound && (this.firstFound = !0), n = !!this.firstFound;
                                break;
                            case B.PPS:
                                n = !1, this.track.pps || (this.parsePPS(e.getData().subarray(4)), !this.remuxer.readyToDecode && this.track.pps && this.track.sps && (this.remuxer.readyToDecode = !0));
                                break;
                            case B.SPS:
                                n = !1, this.track.sps || (this.parseSPS(e.getData().subarray(4)), !this.remuxer.readyToDecode && this.track.pps && this.track.sps && (this.remuxer.readyToDecode = !0));
                                break;
                            case B.SEI:
                                n = !1;
                                var r = new DataView(e.data.buffer, e.data.byteOffset, e.data.byteLength), i = 0,
                                    s = r.getUint8(i);
                                ++i;
                                var a = 0, o = r.getUint8(i);
                                for (++i; 255 === o;) a += o, o = r.getUint8(i), ++i;
                                a += o;
                                var u = e.data.subarray(i, i + 16);
                                i += 16, console.log("PT: " + s + ", PS: " + a + ", UUID: " + H()(u).map(function (t) {
                                    return ("0" + t.toString(16)).slice(-2)
                                }).join(""));
                                break;
                            case B.EOSEQ:
                            case B.EOSTR:
                                n = !1
                        }
                        return null === n && e.getNri() > 0 && (n = !0), n
                    }
                }], [{
                    key: "parceSliceHeader", value: function (t) {
                        var e = new E(t), n = (e.readUEG(), e.readUEG());
                        e.readUEG(), e.readUByte();
                        return n
                    }
                }, {
                    key: "skipScalingList", value: function (t, e) {
                        for (var n = 8, r = 8, i = 0; i < e; i++) 0 !== r && (r = (n + t.readEG() + 256) % 256), n = 0 === r ? n : r
                    }
                }, {
                    key: "readSPS", value: function (e) {
                        var n, r, i, s, a = new E(e), o = 0, u = 0, h = 0, c = 0, l = 1, f = void 0, d = void 0;
                        if (a.readUByte(), n = a.readUByte(), a.readBits(5), a.skipBits(3), a.readUByte(), a.skipUEG(), 100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n) {
                            var p = a.readUEG();
                            if (3 === p && a.skipBits(1), a.skipUEG(), a.skipUEG(), a.skipBits(1), a.readBoolean()) {
                                d = 3 !== p ? 8 : 12;
                                for (var v = 0; v < d; ++v) a.readBoolean() && (v < 6 ? t.skipScalingList(a, 16) : t.skipScalingList(a, 64))
                            }
                        }
                        a.skipUEG();
                        var y = a.readUEG();
                        if (0 === y) a.readUEG(); else if (1 === y) {
                            a.skipBits(1), a.skipEG(), a.skipEG(), f = a.readUEG();
                            for (var g = 0; g < f; ++g) a.skipEG()
                        }
                        if (a.skipUEG(), a.skipBits(1), r = a.readUEG(), i = a.readUEG(), 0 === (s = a.readBits(1)) && a.skipBits(1), a.skipBits(1), a.readBoolean() && (o = a.readUEG(), u = a.readUEG(), h = a.readUEG(), c = a.readUEG()), a.readBoolean()) {
                            if (a.readBoolean()) {
                                var m = void 0;
                                switch (a.readUByte()) {
                                    case 1:
                                        m = [1, 1];
                                        break;
                                    case 2:
                                        m = [12, 11];
                                        break;
                                    case 3:
                                        m = [10, 11];
                                        break;
                                    case 4:
                                        m = [16, 11];
                                        break;
                                    case 5:
                                        m = [40, 33];
                                        break;
                                    case 6:
                                        m = [24, 11];
                                        break;
                                    case 7:
                                        m = [20, 11];
                                        break;
                                    case 8:
                                        m = [32, 11];
                                        break;
                                    case 9:
                                        m = [80, 33];
                                        break;
                                    case 10:
                                        m = [18, 11];
                                        break;
                                    case 11:
                                        m = [15, 11];
                                        break;
                                    case 12:
                                        m = [64, 33];
                                        break;
                                    case 13:
                                        m = [160, 99];
                                        break;
                                    case 14:
                                        m = [4, 3];
                                        break;
                                    case 15:
                                        m = [3, 2];
                                        break;
                                    case 16:
                                        m = [2, 1];
                                        break;
                                    case 255:
                                        m = [a.readUByte() << 8 | a.readUByte(), a.readUByte() << 8 | a.readUByte()]
                                }
                                m && (l = m[0] / m[1])
                            }
                            if (a.readBoolean() && a.skipBits(1), a.readBoolean() && (a.skipBits(4), a.readBoolean() && a.skipBits(24)), a.readBoolean() && (a.skipUEG(), a.skipUEG()), a.readBoolean()) {
                                var S = a.readUInt(), b = a.readUInt(), k = a.readBoolean(), T = b / (2 * S);
                                console.log("timescale: " + b + "; unitsInTick: " + S + "; fixedFramerate: " + k + "; avgFrameDuration: " + T)
                            }
                        }
                        return {
                            width: Math.ceil((16 * (r + 1) - 2 * o - 2 * u) * l),
                            height: (2 - s) * (i + 1) * 16 - (s ? 2 : 4) * (h + c)
                        }
                    }
                }, {
                    key: "readSliceType", value: function (t) {
                        return t.readUByte(), t.readUEG(), t.readUEG()
                    }
                }]), t
            }(), I = o("remuxer:h264"), L = function (t) {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    ct()(this, e);
                    var i = K()(this, (e.__proto__ || G()(e)).call(this, t, n));
                    if (i.nextDts = void 0, i.readyToDecode = !1, i.initialized = !1, i.firstDTS = 0, i.firstPTS = 0, i.lastDTS = void 0, i.lastSampleDuration = 0, i.lastDurations = [], i.tsAlign = Math.round(i.timescale / 60), i.mp4track = {
                            id: k.getTrackID(),
                            type: "video",
                            len: 0,
                            fragmented: !0,
                            sps: "",
                            pps: "",
                            width: 0,
                            height: 0,
                            timescale: t,
                            duration: t,
                            samples: []
                        }, i.samples = [], i.lastGopDTS = -99999999999999, i.gop = [], i.firstUnit = !0, i.h264 = new P(i), r.sps) {
                        var s = new Uint8Array(r.sps);
                        7 == (31 & s[0]) ? i.setSPS(s) : I.warn("bad SPS in SDP")
                    }
                    if (r.pps) {
                        var a = new Uint8Array(r.pps);
                        8 == (31 & a[0]) ? i.setPPS(a) : I.warn("bad PPS in SDP")
                    }
                    return i.mp4track.pps && i.mp4track.sps && (i.readyToDecode = !0), i
                }

                return Y()(e, t), ft()(e, [{
                    key: "_scaled", value: function (t) {
                        return t >>> this.scaleFactor
                    }
                }, {
                    key: "_unscaled", value: function (t) {
                        return t << this.scaleFactor
                    }
                }, {
                    key: "setSPS", value: function (t) {
                        this.h264.parseSPS(t)
                    }
                }, {
                    key: "setPPS", value: function (t) {
                        this.h264.parsePPS(t)
                    }
                }, {
                    key: "remux", value: function (t) {
                        if (this.lastGopDTS < t.dts) {
                            this.gop.sort(k.dtsSortFunc);
                            var n = !0, r = !1, i = void 0;
                            try {
                                for (var s, a = nt()(this.gop); !(n = (s = a.next()).done); n = !0) {
                                    var o = s.value;
                                    Z()(e.prototype.__proto__ || G()(e.prototype), "remux", this).call(this, o) && (this.mp4track.len += o.getSize())
                                }
                            } catch (t) {
                                r = !0, i = t
                            } finally {
                                try {
                                    !n && a.return && a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                            this.gop = [], this.lastGopDTS = t.dts
                        }
                        this.h264.parseNAL(t) && this.gop.push(t)
                    }
                }, {
                    key: "getPayload", value: function () {
                        if (!this.getPayloadBase()) return null;
                        for (var t = new Uint8Array(this.mp4track.len), e = 0, n = this.mp4track.samples, r = void 0, i = void 0, s = void 0, a = void 0; this.samples.length;) {
                            var o = this.samples.shift();
                            if (null === o) {
                                this.nextDts = void 0;
                                break
                            }
                            var u = o.unit;
                            if (s = o.pts - this.initDTS, a = o.dts - this.initDTS, a = Math.min(s, a), void 0 !== i) {
                                var h = this.scaled(a - i);
                                if (h < 0) {
                                    I.log("invalid AVC sample duration at PTS/DTS: " + s + "/" + a + "|lastDTS: " + i + ":" + h), this.mp4track.len -= u.getSize();
                                    continue
                                }
                                this.lastDurations.push(h), this.lastDurations.length > 100 && this.lastDurations.shift(), r.duration = h
                            } else {
                                if (this.nextDts) {
                                    var c = a - this.nextDts;
                                    if (Math.abs(Math.round(k.toMS(c))) < 600) c && (a = this.nextDts, s = Math.max(s - c, a)); else if (c < 0) {
                                        I.log("skip frame from the past at DTS=" + a + " with expected DTS=" + this.nextDts), this.mp4track.len -= u.getSize();
                                        continue
                                    }
                                }
                                this.firstDTS = Math.max(0, a)
                            }
                            var l = (r = {
                                size: u.getSize(),
                                duration: 0,
                                cts: this.scaled(s - a),
                                flags: {isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0}
                            }).flags;
                            !0 === o.unit.isKeyframe() ? (l.dependsOn = 2, l.isNonSync = 0) : (l.dependsOn = 1, l.isNonSync = 1), t.set(u.getData(), e), e += u.getSize(), n.push(r), i = a
                        }
                        if (!n.length) return null;
                        var f = this.lastDurations.reduce(function (t, e) {
                            return (0 | t) + (0 | e)
                        }, 0) / (this.lastDurations.length || 1) | 0;
                        if (n.length >= 2 ? (this.lastSampleDuration = f, r.duration = f) : r.duration = this.lastSampleDuration, n.length && (!this.nextDts || navigator.userAgent.toLowerCase().indexOf("chrome") > -1)) {
                            var d = n[0].flags;
                            d.dependsOn = 2, d.isNonSync = 0
                        }
                        return this.nextDts = a + this.unscaled(this.lastSampleDuration), new Uint8Array(t.buffer, 0, this.mp4track.len)
                    }
                }]), e
            }(k), M = function () {
                function t() {
                    ct()(this, t)
                }

                return ft()(t, null, [{
                    key: "H264", get: function () {
                        return 1
                    }
                }, {
                    key: "AAC", get: function () {
                        return 2
                    }
                }, {
                    key: "map", get: function () {
                        var e;
                        return e = {}, ut()(e, t.H264, "video"), ut()(e, t.AAC, "audio"), e
                    }
                }, {
                    key: "string_map", get: function () {
                        return {H264: t.H264, AAC: t.AAC, "MP4A-LATM": t.AAC, "MPEG4-GENERIC": t.AAC}
                    }
                }]), t
            }(), V = o("remuxer"), F = function () {
                function t(e) {
                    ct()(this, t), this.mse = new m([e]), this.eventSource = new d, this.mseEventSource = new p(this.mse.eventSource), this.mse_ready = !0, this.reset(), this.errorListener = this.mseClose.bind(this), this.closeListener = this.mseClose.bind(this), this.eventSource.addEventListener("ready", this.init.bind(this))
                }

                return ft()(t, null, [{
                    key: "TrackConverters", get: function () {
                        var t;
                        return t = {}, ut()(t, M.H264, L), ut()(t, M.AAC, w), t
                    }
                }, {
                    key: "TrackScaleFactor", get: function () {
                        var t;
                        return t = {}, ut()(t, M.H264, 1), ut()(t, M.AAC, 0), t
                    }
                }, {
                    key: "TrackTimescale", get: function () {
                        var t;
                        return t = {}, ut()(t, M.H264, 9e4), ut()(t, M.AAC, 0), t
                    }
                }]), ft()(t, [{
                    key: "initMSEHandlers", value: function () {
                        this.mseEventSource.on("error", this.errorListener), this.mseEventSource.on("sourceclosed", this.closeListener)
                    }
                }, {
                    key: "reset", value: function () {
                        var t = q()(U.a.mark(function t() {
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.tracks = {}, this.initialized = !1, this.initSegments = {}, this.codecs = [], this.streams = {}, this.enabled = !1, t.next = 8, this.mse.clear();
                                    case 8:
                                        this.initMSEHandlers();
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "destroy", value: function () {
                        this.mseEventSource.destroy(), this.mse.destroy(), this.mse = null, this.detachClient(), this.eventSource.destroy()
                    }
                }, {
                    key: "onTracks", value: function (e) {
                        V.debug("ontracks: ", e.detail);
                        var n = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = nt()(e.detail); !(n = (s = a.next()).done); n = !0) {
                                var o = s.value;
                                this.tracks[o.type] = new t.TrackConverters[o.type](t.TrackTimescale[o.type], t.TrackScaleFactor[o.type], o.params), o.offset && (this.tracks[o.type].timeOffset = o.offset), o.duration ? (this.tracks[o.type].mp4track.duration = o.duration * (this.tracks[o.type].timescale || t.TrackTimescale[o.type]), this.tracks[o.type].duration = o.duration) : this.tracks[o.type].duration = 1
                            }
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        this.mse.setLive(!this.client.seekable)
                    }
                }, {
                    key: "setTimeOffset", value: function (t, e) {
                        this.tracks[e.type] && (this.tracks[e.type].timeOffset = t)
                    }
                }, {
                    key: "init", value: function () {
                        var t = this, e = [];
                        this.codecs = [];
                        var n = [];
                        for (var r in this.tracks) {
                            var i = this.tracks[r];
                            if (!m.isSupported([i.mp4track.codec])) throw new Error(i.mp4track.type + " codec " + i.mp4track.codec + " is not supported");
                            e.push(i.mp4track), this.codecs.push(i.mp4track.codec), i.init(1 / 0, 1 / 0)
                        }
                        for (var s in this.tracks) {
                            var a = this.tracks[s];
                            this.initSegments[s] = v.initSegment([a.mp4track], a.duration * a.timescale, a.timescale), n.push(this.initMSE(s, a.mp4track.codec))
                        }
                        return this.initialized = !0, J.a.all(n).then(function () {
                            t.enabled = !0
                        })
                    }
                }, {
                    key: "initMSE", value: function (t, e) {
                        var n = this;
                        if (m.isSupported(this.codecs)) return this.mse.setCodec(t, M.map[t] + '/mp4; codecs="' + e + '"').then(function () {
                            n.mse.feed(t, n.initSegments[t])
                        });
                        throw new Error("Codecs are not supported")
                    }
                }, {
                    key: "mseClose", value: function () {
                        this.client.stop(), this.eventSource.dispatchEvent("stopped")
                    }
                }, {
                    key: "flush", value: function () {
                        if (this.onSamples(), this.initialized) for (var t in this.tracks) {
                            var e = this.tracks[t], n = e.getPayload();
                            n && n.byteLength && (this.mse.feed(t, [v.moof(e.seq, e.scaled(e.firstDTS), e.mp4track), v.mdat(n)]), e.flush())
                        } else if (N()(this.tracks).length) {
                            for (var r in this.tracks) {
                                if (!this.tracks[r].readyToDecode || !this.tracks[r].samples.length) return;
                                V.debug("Init MSE for track " + this.tracks[r].mp4track.type)
                            }
                            this.eventSource.dispatchEvent("ready")
                        }
                    }
                }, {
                    key: "onSamples", value: function (t) {
                        for (var e in this.client.sampleQueues) for (var n = this.client.sampleQueues[e]; n.length;) {
                            var r = n.shift(), i = !0, s = !1, a = void 0;
                            try {
                                for (var o, u = nt()(r); !(i = (o = u.next()).done); i = !0) {
                                    var h = o.value;
                                    this.tracks[e].remux(h)
                                }
                            } catch (t) {
                                s = !0, a = t
                            } finally {
                                try {
                                    !i && u.return && u.return()
                                } finally {
                                    if (s) throw a
                                }
                            }
                        }
                    }
                }, {
                    key: "onAudioConfig", value: function (t) {
                        this.tracks[t.detail.pay] && this.tracks[t.detail.pay].setConfig(t.detail.config)
                    }
                }, {
                    key: "attachClient", value: function (t) {
                        var e = this;
                        this.detachClient(), this.client = t, this.clientEventSource = new p(this.client.eventSource), this.clientEventSource.on("samples", this.samplesListener), this.clientEventSource.on("audio_config", this.audioConfigListener), this.clientEventSource.on("tracks", this.onTracks.bind(this)), this.clientEventSource.on("flush", this.flush.bind(this)), this.clientEventSource.on("clear", function () {
                            e.reset(), e.mse.clear().then(function () {
                                e.initMSEHandlers()
                            })
                        })
                    }
                }, {
                    key: "detachClient", value: function () {
                        this.client && (this.clientEventSource.destroy(), this.client = null)
                    }
                }]), t
            }(), j = function () {
                function t(e, n) {
                    ct()(this, t), this.stateMachine = n, this.transitions = new tt.a, this.name = e
                }

                return ft()(t, [{
                    key: "activate", value: function () {
                        return J.a.resolve(null)
                    }
                }, {
                    key: "finishTransition", value: function () {
                    }
                }, {
                    key: "failHandler", value: function () {
                    }
                }, {
                    key: "deactivate", value: function () {
                        return J.a.resolve(null)
                    }
                }]), t
            }(), z = function () {
                function t() {
                    ct()(this, t), this.storage = {}, this.currentState = null, this.states = new at.a
                }

                return ft()(t, [{
                    key: "addState", value: function (t, e) {
                        var n = e.activate, r = e.finishTransition, i = e.deactivate, s = new j(t, this);
                        return n && (s.activate = n), r && (s.finishTransition = r), i && (s.deactivate = i), this.states.set(t, s), this
                    }
                }, {
                    key: "addTransition", value: function (t, e) {
                        if (!this.states.has(t)) throw ReferenceError("No such state: " + t + " while connecting to " + e);
                        if (!this.states.has(e)) throw ReferenceError("No such state: " + e + " while connecting from " + t);
                        return this.states.get(t).transitions.add(e), this
                    }
                }, {
                    key: "_promisify", value: function (t) {
                        var e = void 0;
                        try {
                            (e = t).then || (e = J.a.resolve(e))
                        } catch (t) {
                            e = J.a.reject(t)
                        }
                        return e
                    }
                }, {
                    key: "transitionTo", value: function (t) {
                        var e = this;
                        if (null == this.currentState) {
                            var n = this.states.get(t);
                            return this._promisify(n.activate.call(this)).then(function (t) {
                                return e.currentState = n, t
                            }).then(n.finishTransition.bind(this)).catch(function (t) {
                                throw n.failHandler(), t
                            })
                        }
                        if (this.currentState.name == t) return J.a.resolve();
                        if (this.currentState.transitions.has(t)) {
                            var r = this.states.get(t);
                            return this._promisify(r.deactivate.call(this)).then(r.activate.bind(this)).then(function (t) {
                                return e.currentState = r, t
                            }).then(r.finishTransition.bind(this)).catch(function (t) {
                                throw r.failHandler(), t
                            })
                        }
                        return J.a.reject("No such transition: " + this.currentState.name + " to " + t)
                    }
                }]), t
            }(), W = o("parser:sdp"), $ = function () {
                function t() {
                    ct()(this, t), this.version = -1, this.origin = null, this.sessionName = null, this.timing = null, this.sessionBlock = {}, this.media = {}, this.tracks = {}, this.mediaMap = {}
                }

                return ft()(t, [{
                    key: "parse", value: function (e) {
                        var n = this;
                        return new J.a(function (r, i) {
                            var s = e, a = !0, o = n.sessionBlock, u = !0, h = !1, c = void 0;
                            try {
                                for (var l, f = nt()(s.split("\n")); !(u = (l = f.next()).done); u = !0) {
                                    var d = l.value;
                                    if (0 !== (d = d.replace(/\r/, "")).length) {
                                        switch (d.charAt(0)) {
                                            case"v":
                                                if (-1 !== n.version) return W.log("Version present multiple times in SDP"), i(), !1;
                                                a = a && n._parseVersion(d);
                                                break;
                                            case"o":
                                                if (null !== n.origin) return W.log("Origin present multiple times in SDP"), i(), !1;
                                                a = a && n._parseOrigin(d);
                                                break;
                                            case"s":
                                                if (null !== n.sessionName) return W.log("Session Name present multiple times in SDP"), i(), !1;
                                                a = a && n._parseSessionName(d);
                                                break;
                                            case"t":
                                                if (null !== n.timing) return W.log("Timing present multiple times in SDP"), i(), !1;
                                                a = a && n._parseTiming(d);
                                                break;
                                            case"m":
                                                null !== o && n.sessionBlock !== o && (n.media[o.type] = o), (o = {}).rtpmap = {}, n._parseMediaDescription(d, o);
                                                break;
                                            case"a":
                                                t._parseAttribute(d, o);
                                                break;
                                            default:
                                                W.log("Ignored unknown SDP directive: " + d)
                                        }
                                        if (!a) return void i()
                                    }
                                }
                            } catch (t) {
                                h = !0, c = t
                            } finally {
                                try {
                                    !u && f.return && f.return()
                                } finally {
                                    if (h) throw c
                                }
                            }
                            n.media[o.type] = o, a ? r() : i()
                        })
                    }
                }, {
                    key: "_parseVersion", value: function (t) {
                        var e = t.match(/^v=([0-9]+)$/);
                        return e && e.length ? (this.version = e[1], 0 == this.version || (W.log("Unsupported SDP version:" + this.version), !1)) : (W.log("'v=' (Version) formatted incorrectly: " + t), !1)
                    }
                }, {
                    key: "_parseOrigin", value: function (t) {
                        var e = t.match(/^o=([^ ]+) (-?[0-9]+) (-?[0-9]+) (IN) (IP4|IP6) ([^ ]+)$/);
                        return e && e.length ? (this.origin = {}, this.origin.username = e[1], this.origin.sessionid = e[2], this.origin.sessionversion = e[3], this.origin.nettype = e[4], this.origin.addresstype = e[5], this.origin.unicastaddress = e[6], !0) : (W.log("'o=' (Origin) formatted incorrectly: " + t), !1)
                    }
                }, {
                    key: "_parseSessionName", value: function (t) {
                        var e = t.match(/^s=([^\r\n]+)$/);
                        return e && e.length ? (this.sessionName = e[1], !0) : (W.log("'s=' (Session Name) formatted incorrectly: " + t), !1)
                    }
                }, {
                    key: "_parseTiming", value: function (t) {
                        var e = t.match(/^t=([0-9]+) ([0-9]+)$/);
                        return e && e.length ? (this.timing = {}, this.timing.start = e[1], this.timing.stop = e[2], !0) : (W.log("'t=' (Timing) formatted incorrectly: " + t), !1)
                    }
                }, {
                    key: "_parseMediaDescription", value: function (t, e) {
                        var n = t.match(/^m=([^ ]+) ([^ ]+) ([^ ]+)[ ]/);
                        if (!n || !n.length) return W.log("'m=' (Media) formatted incorrectly: " + t), !1;
                        e.type = n[1], e.port = n[2], e.proto = n[3], e.fmt = t.substr(n[0].length).split(" ").map(function (t, e, n) {
                            return parseInt(t)
                        });
                        var r = !0, i = !1, s = void 0;
                        try {
                            for (var a, o = nt()(e.fmt); !(r = (a = o.next()).done); r = !0) {
                                var u = a.value;
                                this.mediaMap[u] = e
                            }
                        } catch (t) {
                            i = !0, s = t
                        } finally {
                            try {
                                !r && o.return && o.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return !0
                    }
                }, {
                    key: "getSessionBlock", value: function () {
                        return this.sessionBlock
                    }
                }, {
                    key: "hasMedia", value: function (t) {
                        return void 0 != this.media[t]
                    }
                }, {
                    key: "getMediaBlock", value: function (t) {
                        return this.media[t]
                    }
                }, {
                    key: "getMediaBlockByPayloadType", value: function (t) {
                        return this.mediaMap[t] || null
                    }
                }, {
                    key: "getMediaBlockList", value: function () {
                        var t = [];
                        for (var e in this.media) t.push(e);
                        return t
                    }
                }], [{
                    key: "_parseAttribute", value: function (t, e) {
                        if (null === e) return !0;
                        var n, r = t.indexOf(":");
                        switch (t.substr(0, -1 === r ? 2147483647 : r)) {
                            case"a=recvonly":
                            case"a=sendrecv":
                            case"a=sendonly":
                            case"a=inactive":
                                e.mode = t.substr("a=".length);
                                break;
                            case"a=range":
                                n = t.match(/^a=range:\s*([a-zA-Z-]+)=([0-9.]+|now)\s*-\s*([0-9.]*)$/), e.range = [Number("now" == n[2] ? -1 : n[2]), Number(n[3]), n[1]];
                                break;
                            case"a=control":
                                e.control = t.substr("a=control:".length);
                                break;
                            case"a=rtpmap":
                                if (null === (n = t.match(/^a=rtpmap:(\d+) (.*)$/))) return W.log("Could not parse 'rtpmap' of 'a='"), !1;
                                var i = parseInt(n[1]);
                                e.rtpmap[i] = {};
                                var s = n[2].split("/");
                                e.rtpmap[i].name = s[0].toUpperCase(), e.rtpmap[i].clock = s[1], void 0 !== s[2] && (e.rtpmap[i].encparams = s[2]), e.ptype = M.string_map[s[0].toUpperCase()];
                                break;
                            case"a=fmtp":
                                if (0 === (n = t.match(/^a=fmtp:(\d+) (.*)$/)).length) return W.log("Could not parse 'fmtp'  of 'a='"), !1;
                                e.fmtp = {};
                                var a = !0, o = !1, u = void 0;
                                try {
                                    for (var h, c = nt()(n[2].split(";")); !(a = (h = c.next()).done); a = !0) {
                                        var l = h.value, f = l.indexOf("=");
                                        e.fmtp[l.substr(0, f).toLowerCase().trim()] = l.substr(f + 1).trim()
                                    }
                                } catch (t) {
                                    o = !0, u = t
                                } finally {
                                    try {
                                        !a && c.return && c.return()
                                    } finally {
                                        if (o) throw u
                                    }
                                }
                        }
                        return !0
                    }
                }]), t
            }(), Q = o("rtsp:stream"), X = function () {
                function t(e, n) {
                    ct()(this, t), this.state = null, this.client = e, this.track = n, this.rtpChannel = 1, this.stopKeepAlive(), this.keepaliveInterval = null, this.keepaliveTime = 3e4
                }

                return ft()(t, [{
                    key: "reset", value: function () {
                        this.stopKeepAlive(), this.client.forgetRTPChannel(this.rtpChannel), this.client = null, this.track = null
                    }
                }, {
                    key: "start", value: function () {
                        return this.sendSetup()
                    }
                }, {
                    key: "stop", value: function () {
                        return this.sendTeardown()
                    }
                }, {
                    key: "getSetupURL", value: function (t) {
                        var e = this.client.sdp.getSessionBlock();
                        return h.isAbsolute(t.control) ? t.control : h.isAbsolute("" + e.control + t.control) ? "" + e.control + t.control : h.isAbsolute("" + this.client.contentBase + t.control) ? "" + this.client.contentBase + t.control : t.control
                    }
                }, {
                    key: "getControlURL", value: function () {
                        var t = this.client.sdp.getSessionBlock().control;
                        return h.isAbsolute(t) ? t : t && "*" !== t ? "" + this.client.contentBase + t : this.client.contentBase
                    }
                }, {
                    key: "sendKeepalive", value: function () {
                        return this.client.methods.includes("GET_PARAMETER") ? this.client.sendRequest("GET_PARAMETER", this.getSetupURL(this.track), {Session: this.session}) : this.client.sendRequest("OPTIONS", "*")
                    }
                }, {
                    key: "stopKeepAlive", value: function () {
                        clearInterval(this.keepaliveInterval)
                    }
                }, {
                    key: "startKeepAlive", value: function () {
                        var t = this;
                        this.keepaliveInterval = setInterval(function () {
                            t.sendKeepalive().catch(function (e) {
                                Q.error(e), e instanceof Ut && 501 == Number(e.data.parsed.code) || t.client.reconnect()
                            })
                        }, this.keepaliveTime)
                    }
                }, {
                    key: "sendRequest", value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {};
                        return this.session && (n.Session = this.session), O()(n, e), this.client.sendRequest(t, this.getControlURL(), n)
                    }
                }, {
                    key: "sendSetup", value: function () {
                        var t = this;
                        this.state = Vt.STATE_SETUP, this.rtpChannel = this.client.interleaveChannelIndex;
                        var e = this.client.interleaveChannelIndex++ + "-" + this.client.interleaveChannelIndex++;
                        return this.client.sendRequest("SETUP", this.getSetupURL(this.track), {
                            Transport: "RTP/AVP/TCP;unicast;interleaved=" + e,
                            Date: (new Date).toUTCString()
                        }).then(function (e) {
                            t.session = e.headers.session;
                            var n = e.headers.transport;
                            if (n) {
                                var r = n.match(/interleaved=([0-9]+)-([0-9]+)/)[1];
                                r && (t.rtpChannel = Number(r))
                            }
                            var i = t.session.split(";").slice(1), s = {}, a = !0, o = !1, u = void 0;
                            try {
                                for (var h, c = nt()(i); !(a = (h = c.next()).done); a = !0) {
                                    var l = h.value.split("=");
                                    s[l[0]] = l[1]
                                }
                            } catch (t) {
                                o = !0, u = t
                            } finally {
                                try {
                                    !a && c.return && c.return()
                                } finally {
                                    if (o) throw u
                                }
                            }
                            return s.timeout && (t.keepaliveInterval = 500 * Number(s.timeout)), t.client.useRTPChannel(t.rtpChannel), t.startKeepAlive(), {
                                track: t.track,
                                data: e
                            }
                        })
                    }
                }]), t
            }();

            function et(t, e) {
                var n = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function rt(t, e, n, r, i, s) {
                return et((a = et(et(e, t), et(r, s))) << (o = i) | a >>> 32 - o, n);
                var a, o
            }

            function st(t, e, n, r, i, s, a) {
                return rt(e & n | ~e & r, t, e, i, s, a)
            }

            function ot(t, e, n, r, i, s, a) {
                return rt(e & r | n & ~r, t, e, i, s, a)
            }

            function ht(t, e, n, r, i, s, a) {
                return rt(e ^ n ^ r, t, e, i, s, a)
            }

            function lt(t, e, n, r, i, s, a) {
                return rt(n ^ (e | ~r), t, e, i, s, a)
            }

            function dt(t, e) {
                var n, r, i, s, a;
                t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
                var o = 1732584193, u = -271733879, h = -1732584194, c = 271733878;
                for (n = 0; n < t.length; n += 16) r = o, i = u, s = h, a = c, u = lt(u = lt(u = lt(u = lt(u = ht(u = ht(u = ht(u = ht(u = ot(u = ot(u = ot(u = ot(u = st(u = st(u = st(u = st(u, h = st(h, c = st(c, o = st(o, u, h, c, t[n], 7, -680876936), u, h, t[n + 1], 12, -389564586), o, u, t[n + 2], 17, 606105819), c, o, t[n + 3], 22, -1044525330), h = st(h, c = st(c, o = st(o, u, h, c, t[n + 4], 7, -176418897), u, h, t[n + 5], 12, 1200080426), o, u, t[n + 6], 17, -1473231341), c, o, t[n + 7], 22, -45705983), h = st(h, c = st(c, o = st(o, u, h, c, t[n + 8], 7, 1770035416), u, h, t[n + 9], 12, -1958414417), o, u, t[n + 10], 17, -42063), c, o, t[n + 11], 22, -1990404162), h = st(h, c = st(c, o = st(o, u, h, c, t[n + 12], 7, 1804603682), u, h, t[n + 13], 12, -40341101), o, u, t[n + 14], 17, -1502002290), c, o, t[n + 15], 22, 1236535329), h = ot(h, c = ot(c, o = ot(o, u, h, c, t[n + 1], 5, -165796510), u, h, t[n + 6], 9, -1069501632), o, u, t[n + 11], 14, 643717713), c, o, t[n], 20, -373897302), h = ot(h, c = ot(c, o = ot(o, u, h, c, t[n + 5], 5, -701558691), u, h, t[n + 10], 9, 38016083), o, u, t[n + 15], 14, -660478335), c, o, t[n + 4], 20, -405537848), h = ot(h, c = ot(c, o = ot(o, u, h, c, t[n + 9], 5, 568446438), u, h, t[n + 14], 9, -1019803690), o, u, t[n + 3], 14, -187363961), c, o, t[n + 8], 20, 1163531501), h = ot(h, c = ot(c, o = ot(o, u, h, c, t[n + 13], 5, -1444681467), u, h, t[n + 2], 9, -51403784), o, u, t[n + 7], 14, 1735328473), c, o, t[n + 12], 20, -1926607734), h = ht(h, c = ht(c, o = ht(o, u, h, c, t[n + 5], 4, -378558), u, h, t[n + 8], 11, -2022574463), o, u, t[n + 11], 16, 1839030562), c, o, t[n + 14], 23, -35309556), h = ht(h, c = ht(c, o = ht(o, u, h, c, t[n + 1], 4, -1530992060), u, h, t[n + 4], 11, 1272893353), o, u, t[n + 7], 16, -155497632), c, o, t[n + 10], 23, -1094730640), h = ht(h, c = ht(c, o = ht(o, u, h, c, t[n + 13], 4, 681279174), u, h, t[n], 11, -358537222), o, u, t[n + 3], 16, -722521979), c, o, t[n + 6], 23, 76029189), h = ht(h, c = ht(c, o = ht(o, u, h, c, t[n + 9], 4, -640364487), u, h, t[n + 12], 11, -421815835), o, u, t[n + 15], 16, 530742520), c, o, t[n + 2], 23, -995338651), h = lt(h, c = lt(c, o = lt(o, u, h, c, t[n], 6, -198630844), u, h, t[n + 7], 10, 1126891415), o, u, t[n + 14], 15, -1416354905), c, o, t[n + 5], 21, -57434055), h = lt(h, c = lt(c, o = lt(o, u, h, c, t[n + 12], 6, 1700485571), u, h, t[n + 3], 10, -1894986606), o, u, t[n + 10], 15, -1051523), c, o, t[n + 1], 21, -2054922799), h = lt(h, c = lt(c, o = lt(o, u, h, c, t[n + 8], 6, 1873313359), u, h, t[n + 15], 10, -30611744), o, u, t[n + 6], 15, -1560198380), c, o, t[n + 13], 21, 1309151649), h = lt(h, c = lt(c, o = lt(o, u, h, c, t[n + 4], 6, -145523070), u, h, t[n + 11], 10, -1120210379), o, u, t[n + 2], 15, 718787259), c, o, t[n + 9], 21, -343485551), o = et(o, r), u = et(u, i), h = et(h, s), c = et(c, a);
                return [o, u, h, c]
            }

            function pt(t) {
                var e, n = "", r = 32 * t.length;
                for (e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                return n
            }

            function vt(t) {
                var e, n = [];
                for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
                var r = 8 * t.length;
                for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                return n
            }

            function yt(t) {
                var e, n, r = "";
                for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), r += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
                return r
            }

            function gt(t) {
                return unescape(encodeURIComponent(t))
            }

            function mt(t) {
                return function (t) {
                    return pt(dt(vt(t), 8 * t.length))
                }(gt(t))
            }

            function St(t, e) {
                return function (t, e) {
                    var n, r, i = vt(t), s = [], a = [];
                    for (s[15] = a[15] = void 0, i.length > 16 && (i = dt(i, 8 * t.length)), n = 0; n < 16; n += 1) s[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                    return r = dt(s.concat(vt(e)), 512 + 8 * e.length), pt(dt(a.concat(r), 640))
                }(gt(t), gt(e))
            }

            function bt(t, e, n) {
                return e ? n ? St(e, t) : yt(St(e, t)) : n ? mt(t) : yt(mt(t))
            }

            var kt = function () {
                function t(e, n) {
                    ct()(this, t);
                    var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    this.version = r.getUint8(0) >>> 6, this.padding = 1 & r.getUint8(0), this.has_extension = 1 & r.getUint8(0), this.csrc = 15 & r.getUint8(0), this.marker = r.getUint8(1) >>> 7, this.pt = 127 & r.getUint8(1), this.sequence = r.getUint16(2), this.timestamp = r.getUint32(4), this.ssrc = r.getUint32(8), this.csrcs = [];
                    var i = 12;
                    this.csrc > 0 && (this.csrcs.push(r.getUint32(i)), i += 4), 1 == this.has_extension && (this.extension = r.getUint16(i), this.ehl = r.getUint16(i + 2), i += 4, this.header_data = e.slice(i, this.ehl), i += this.ehl), this.headerLength = i;
                    this.padding && r.getUint8(e.byteLength - 1), this.media = n.getMediaBlockByPayloadType(this.pt), null === this.media ? u.log("Media description for payload type: " + this.pt + " not provided.") : this.type = this.media.ptype, this.data = e.subarray(i)
                }

                return ft()(t, [{
                    key: "getPayload", value: function () {
                        return this.data
                    }
                }, {
                    key: "getTimestampMS", value: function () {
                        return this.timestamp
                    }
                }, {
                    key: "toString", value: function () {
                        return "RTP(version:" + this.version + ", padding:" + this.padding + ", has_extension:" + this.has_extension + ", csrc:" + this.csrc + ", marker:" + this.marker + ", pt:" + this.pt + ", sequence:" + this.sequence + ", timestamp:" + this.timestamp + ", ssrc:" + this.ssrc + ")"
                    }
                }, {
                    key: "isVideo", value: function () {
                        return "video" == this.media.type
                    }
                }, {
                    key: "isAudio", value: function () {
                        return "audio" == this.media.type
                    }
                }]), t
            }(), Tt = function () {
                function t(e) {
                    for (var n in ct()(this, t), this.tsOffsets = {}, e.media) {
                        var r = !0, i = !1, s = void 0;
                        try {
                            for (var a, o = nt()(e.media[n].fmt); !(r = (a = o.next()).done); r = !0) {
                                var u = a.value;
                                this.tsOffsets[u] = {last: 0, overflow: 0}
                            }
                        } catch (t) {
                            i = !0, s = t
                        } finally {
                            try {
                                !r && o.return && o.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                    }
                }

                return ft()(t, [{
                    key: "build", value: function (t, e) {
                        var n = new kt(t, e), r = this.tsOffsets[n.pt];
                        return r && (n.timestamp += r.overflow, r.last && Math.abs(n.timestamp - r.last) > 2147483647 && (console.log("\nlast ts: " + r.last + "\n\n                            new ts: " + n.timestamp + "\n\n                            new ts adjusted: " + (n.timestamp + 4294967295) + "\n\n                            last overflow: " + r.overflow + "\n\n                            new overflow: " + (r.overflow + 4294967295) + "\n\n                            "), r.overflow += 4294967295, n.timestamp += 4294967295), r.last = n.timestamp), n
                    }
                }]), t
            }(), wt = function () {
                function t(e) {
                    ct()(this, t), this.version = e
                }

                return ft()(t, null, [{
                    key: "RTSP_1_0", get: function () {
                        return "RTSP/1.0"
                    }
                }]), ft()(t, [{
                    key: "build", value: function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                            i = t + " " + e + " " + this.version + "\r\n";
                        for (var s in n) i += s + ": " + n[s] + "\r\n";
                        return r && (i += "Content-Length: " + r.length + "\r\n"), i += "\r\n", r && (i += r), i
                    }
                }, {
                    key: "parse", value: function (t) {
                        var e = t.split("\r\n"), n = {headers: {}, body: null, code: 0, statusLine: ""},
                            r = e[0].match(new RegExp(this.version + "[ ]+([0-9]{3})[ ]+(.*)")), i = C()(r, 3);
                        i[0], n.code = i[1], n.statusLine = i[2], n.code = Number(n.code);
                        for (var s = 1; e[s];) {
                            var a = e[s].split(/:(.+)/), o = C()(a, 2), u = o[0], h = o[1];
                            n.headers[u.toLowerCase()] = h.trim(), s++
                        }
                        return n.body = e.slice(s).join("\n\r"), n
                    }
                }]), t
            }(), Et = new wt(wt.RTSP_1_0), Dt = function () {
                function t() {
                    ct()(this, t), this.fragmented_nalu = null
                }

                return ft()(t, [{
                    key: "parseSingleNALUPacket", value: function (t, e, n, r) {
                        return new B(e.type, e.nri, t.subarray(0), n, r)
                    }
                }, {
                    key: "parseAggregationPacket", value: function (e, n, r, i) {
                        var s = new DataView(e.buffer, e.byteOffset, e.byteLength), a = 0;
                        B.STAP_B === n.type && (s.getUint16(a), a += 2);
                        for (var o = []; a < s.byteLength;) {
                            var u = s.getUint16(a);
                            a += 2;
                            var h = t.parseNALHeader(s.getInt8(a));
                            a++;
                            var c = this.parseSingleNALUPacket(e.subarray(a, a + u), h, r, i);
                            null !== c && o.push(c), a += u
                        }
                        return o
                    }
                }, {
                    key: "parseFragmentationUnit", value: function (t, e, n, r) {
                        var i = new DataView(t.buffer, t.byteOffset, t.byteLength), s = 0, a = i.getUint8(s),
                            o = (128 & a) >>> 7, u = (64 & a) >>> 6, h = 31 & a, c = null;
                        s++;
                        return B.FU_B === e.type && (i.getUint16(s), s += 2), o && (this.fragmented_nalu = new B(h, e.nri, t.subarray(s), n, r)), this.fragmented_nalu && this.fragmented_nalu.ntype === h && (o || this.fragmented_nalu.appendData(t.subarray(s)), u) ? (c = this.fragmented_nalu, this.fragmented_nalu = null, c) : null
                    }
                }, {
                    key: "onNALUFragment", value: function (e, n, r) {
                        var i = new DataView(e.buffer, e.byteOffset, e.byteLength), s = t.parseNALHeader(i.getUint8(0)),
                            a = null;
                        if (s.type > 0 && s.type < 24) a = this.parseSingleNALUPacket(e.subarray(1), s, n, r); else {
                            if (B.FU_A !== s.type && B.FU_B !== s.type) return B.STAP_A === s.type || B.STAP_B === s.type ? this.parseAggregationPacket(e.subarray(1), s, n, r) : (u.log("Undefined NAL unit, type: " + s.type), null);
                            a = this.parseFragmentationUnit(e.subarray(1), s, n, r)
                        }
                        return a ? [a] : null
                    }
                }], [{
                    key: "parseNALHeader", value: function (t) {
                        return {nri: 96 & t, type: 31 & t}
                    }
                }]), t
            }(), xt = function () {
                function t(e, n, r) {
                    ct()(this, t), this.dts = n, this.pts = r || this.dts, this.data = e
                }

                return ft()(t, [{
                    key: "getData", value: function () {
                        return this.data
                    }
                }, {
                    key: "getSize", value: function () {
                        return this.data.byteLength
                    }
                }]), t
            }(), At = function () {
                function t() {
                    ct()(this, t), this.config = null
                }

                return ft()(t, [{
                    key: "onAACFragment", value: function (t) {
                        var e = t.getPayload();
                        if (!t.media) return null;
                        var n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                            r = Number(t.media.fmtp.sizelength || 0), i = Number(t.media.fmtp.indexlength || 0),
                            s = Number(t.media.fmtp.indexdeltalength || 0),
                            a = Number(t.media.fmtp.ctsdeltalength || 0), o = Number(t.media.fmtp.dtsdeltalength || 0),
                            u = Number(t.media.fmtp.randomaccessindication || 0),
                            h = Number(t.media.fmtp.streamstateindication || 0),
                            c = Number(t.media.fmtp.auxiliarydatasizelength || 0),
                            l = r + Math.max(i, s) + a + o + u + h + c, f = 0, d = 0,
                            p = 9e4 * (Math.round(t.getTimestampMS() / 1024) << 10) / this.config.samplerate;
                        if (0 !== l) {
                            var v = n.getUint16(0);
                            f = 2 + (v >>> 3) + (7 & v ? 1 : 0);
                            for (var y = [], g = 0, m = new A(e.subarray(2 + d)), S = 0, b = 0, k = 0; k < v;) {
                                var T = m.readBits(r);
                                m.readBits(k ? s : i);
                                if (k += r + (k ? s : i), a) {
                                    m.readBits(1);
                                    S = m.readBits(a), k += a
                                }
                                if (o) {
                                    m.readBits(1);
                                    b = m.readBits(o), k += a
                                }
                                u && (m.skipBits(1), k += 1), h && (m.skipBits(h), k += h), y.push(new xt(e.subarray(f + g, f + g + T), p + b, p + S)), g += T
                            }
                            return y
                        }
                        for (var w = e.subarray(f); 255 == w[d];) ++d;
                        return ++d, [new xt(e.subarray(f + d), p)]
                    }
                }]), t
            }(), _t = function () {
                function t() {
                    ct()(this, t), this.h264parser = new Bt, this.aacparser = new Rt
                }

                return ft()(t, [{
                    key: "parse", value: function (t) {
                        return "video" == t.media.type ? this.h264parser.parse(t) : "audio" == t.media.type ? this.aacparser.parse(t) : null
                    }
                }]), t
            }(), Bt = function () {
                function t() {
                    ct()(this, t), this.naluasm = new Dt
                }

                return ft()(t, [{
                    key: "parse", value: function (t) {
                        return this.naluasm.onNALUFragment(t.getPayload(), t.getTimestampMS())
                    }
                }]), t
            }(), Rt = function () {
                function t() {
                    ct()(this, t), this.scale = 1, this.asm = new At
                }

                return ft()(t, [{
                    key: "setConfig", value: function (t) {
                        this.asm.config = t
                    }
                }, {
                    key: "parse", value: function (t) {
                        return this.asm.onAACFragment(t)
                    }
                }]), t
            }(), Pt = function () {
                function t() {
                    var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {flush: 100};
                    ct()(this, t), this.options = n, this.eventSource = new d, R()(this, {
                        sourceUrl: {
                            value: null,
                            writable: !0
                        },
                        paused: {value: !0, writable: !0},
                        seekable: {value: !1, writable: !0},
                        connected: {value: !1, writable: !0}
                    }), this._onData = function () {
                        if (e.connected) for (; e.transport.dataQueue.length;) e.onData(e.transport.dataQueue.pop())
                    }, this._onConnect = this.onConnected.bind(this), this._onDisconnect = this.onDisconnected.bind(this)
                }

                return ft()(t, [{
                    key: "destroy", value: function () {
                        this.detachTransport()
                    }
                }, {
                    key: "attachTransport", value: function (t) {
                        this.transport && this.detachTransport(), this.transport = t, this.transport.eventSource.addEventListener("data", this._onData), this.transport.eventSource.addEventListener("connected", this._onConnect), this.transport.eventSource.addEventListener("disconnected", this._onDisconnect)
                    }
                }, {
                    key: "detachTransport", value: function () {
                        this.transport && (this.transport.eventSource.removeEventListener("data", this._onData), this.transport.eventSource.removeEventListener("connected", this._onConnect), this.transport.eventSource.removeEventListener("disconnected", this._onDisconnect), this.transport = null)
                    }
                }, {
                    key: "reset", value: function () {
                    }
                }, {
                    key: "start", value: function () {
                        u.log("Client started"), this.paused = !1
                    }
                }, {
                    key: "stop", value: function () {
                        u.log("Client paused"), this.paused = !0
                    }
                }, {
                    key: "seek", value: function (t) {
                    }
                }, {
                    key: "setSource", value: function (t) {
                        this.stop(), this.endpoint = t, this.sourceUrl = t.urlpath
                    }
                }, {
                    key: "startStreamFlush", value: function () {
                        var t = this;
                        this.flushInterval = setInterval(function () {
                            t.paused || t.eventSource.dispatchEvent("flush")
                        }, this.options.flush)
                    }
                }, {
                    key: "stopStreamFlush", value: function () {
                        clearInterval(this.flushInterval)
                    }
                }, {
                    key: "onData", value: function (t) {
                    }
                }, {
                    key: "onConnected", value: function () {
                        this.seekable || (this.transport.dataQueue = [], this.eventSource.dispatchEvent("clear")), this.connected = !0
                    }
                }, {
                    key: "onDisconnected", value: function () {
                        this.connected = !1
                    }
                }, {
                    key: "queryCredentials", value: function () {
                        return J.a.resolve()
                    }
                }, {
                    key: "setCredentials", value: function (t, e) {
                        this.endpoint.user = t, this.endpoint.pass = e, this.endpoint.auth = t + ":" + e
                    }
                }], [{
                    key: "streamType", value: function () {
                        return null
                    }
                }]), t
            }(), Ct = function () {
                function t() {
                    ct()(this, t)
                }

                return ft()(t, null, [{
                    key: "parseAudioSpecificConfig", value: function (e) {
                        var n = void 0,
                            r = (n = e.byteLength ? new A(e) : e).bitpos + 8 * (n.src.byteOffset + n.bytepos),
                            i = n.readBits(5);
                        this.codec = "mp4a.40." + i;
                        var s = n.readBits(4);
                        15 == s && n.skipBits(24);
                        var a = n.readBits(4);
                        return {
                            config: function (t) {
                                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8 * t.byteLength, r = Math.ceil((n - e) / 8), i = new Uint8Array(r), s = e >>> 3, a = (n >>> 3) - 1, o = 7 & e, u = 8 - o, h = 8 - n & 7, c = 0; c < r; ++c) {
                                    var l = 0;
                                    c < a && (l = t[s + c + 1] >> u, c == a - 1 && h < 8 && (l >>= h, l <<= h)), i[c] = t[s + c] << o | l
                                }
                                return i
                            }(new Uint8Array(n.src.buffer), r, r + 16),
                            codec: "mp4a.40." + i,
                            samplerate: t.SampleRates[s],
                            channels: a
                        }
                    }
                }, {
                    key: "parseStreamMuxConfig", value: function (e) {
                        var n = new A(e);
                        if (!n.readBits(1)) return n.skipBits(14), t.parseAudioSpecificConfig(n)
                    }
                }, {
                    key: "SampleRates", get: function () {
                        return [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
                    }
                }]), t
            }(), It = o("rtsp:session"), Ot = function () {
                function t(e, n) {
                    ct()(this, t), this.state = null, this.client = e, this.sessionId = n, this.url = this.getControlURL()
                }

                return ft()(t, [{
                    key: "reset", value: function () {
                        this.client = null
                    }
                }, {
                    key: "start", value: function () {
                        return this.sendPlay()
                    }
                }, {
                    key: "stop", value: function () {
                        return this.sendTeardown()
                    }
                }, {
                    key: "getControlURL", value: function () {
                        var t = this.client.sdp.getSessionBlock().control;
                        return h.isAbsolute(t) ? t : t && "*" !== t ? "" + this.client.contentBase + t : this.client.contentBase
                    }
                }, {
                    key: "sendRequest", value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {};
                        return this.sessionId && (n.Session = this.sessionId), O()(n, e), this.client.sendRequest(t, this.getControlURL(), n)
                    }
                }, {
                    key: "sendPlay", value: function () {
                        var t = q()(U.a.mark(function t() {
                            var e, n, r;
                            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.state = Vt.STATE_PLAY, e = {}, (n = this.client.sdp.sessionBlock.range) && -1 == n[0] && (n[0] = 0), t.next = 6, this.sendRequest("PLAY", e);
                                    case 6:
                                        return r = t.sent, this.state = Vt.STATE_PLAYING, t.abrupt("return", {data: r});
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "sendPause", value: function () {
                        var t = q()(U.a.mark(function t() {
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.client.supports("PAUSE")) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return this.state = Vt.STATE_PAUSE, t.next = 5, this.sendRequest("PAUSE");
                                    case 5:
                                        this.state = Vt.STATE_PAUSED;
                                    case 6:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "sendTeardown", value: function () {
                        var t = q()(U.a.mark(function t() {
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.state == Vt.STATE_TEARDOWN) {
                                            t.next = 5;
                                            break
                                        }
                                        return this.state = Vt.STATE_TEARDOWN, t.next = 4, this.sendRequest("TEARDOWN");
                                    case 4:
                                        It.log("RTSPClient: STATE_TEARDOWN");
                                    case 5:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }]), t
            }(), Lt = o("client:rtsp"), Nt = function (t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {flush: 200};
                    ct()(this, e);
                    var n = K()(this, (e.__proto__ || G()(e)).call(this, t));
                    return n.clientSM = new Vt(n), n.clientSM.ontracks = function (t) {
                        n.eventSource.dispatchEvent("tracks", t), n.startStreamFlush()
                    }, n.sampleQueues = {}, n
                }

                return Y()(e, t), ft()(e, [{
                    key: "setSource", value: function (t) {
                        Z()(e.prototype.__proto__ || G()(e.prototype), "setSource", this).call(this, t), this.clientSM.setSource(t)
                    }
                }, {
                    key: "attachTransport", value: function (t) {
                        Z()(e.prototype.__proto__ || G()(e.prototype), "attachTransport", this).call(this, t), this.clientSM.transport = t
                    }
                }, {
                    key: "detachTransport", value: function () {
                        Z()(e.prototype.__proto__ || G()(e.prototype), "detachTransport", this).call(this), this.clientSM.transport = null
                    }
                }, {
                    key: "reset", value: function () {
                        Z()(e.prototype.__proto__ || G()(e.prototype), "reset", this).call(this), this.sampleQueues = {}
                    }
                }, {
                    key: "destroy", value: function () {
                        return this.clientSM.destroy(), Z()(e.prototype.__proto__ || G()(e.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "start", value: function () {
                        var t = this;
                        return Z()(e.prototype.__proto__ || G()(e.prototype), "start", this).call(this), this.transport ? this.transport.ready.then(function () {
                            return t.clientSM.start()
                        }) : J.a.reject("no transport attached")
                    }
                }, {
                    key: "stop", value: function () {
                        return Z()(e.prototype.__proto__ || G()(e.prototype), "stop", this).call(this), this.clientSM.stop()
                    }
                }, {
                    key: "onData", value: function (t) {
                        this.clientSM.onData(t)
                    }
                }, {
                    key: "onConnected", value: function () {
                        this.clientSM.onConnected(), Z()(e.prototype.__proto__ || G()(e.prototype), "onConnected", this).call(this)
                    }
                }, {
                    key: "onDisconnected", value: function () {
                        Z()(e.prototype.__proto__ || G()(e.prototype), "onDisconnected", this).call(this), this.clientSM.onDisconnected()
                    }
                }], [{
                    key: "streamType", value: function () {
                        return "rtsp"
                    }
                }]), e
            }(Pt), Mt = function (t) {
                function e(t) {
                    return ct()(this, e), K()(this, (e.__proto__ || G()(e)).call(this, t))
                }

                return Y()(e, t), e
            }(Error), Ut = function (t) {
                function e(t) {
                    ct()(this, e);
                    var n = K()(this, (e.__proto__ || G()(e)).call(this, t.msg));
                    return n.data = t, n
                }

                return Y()(e, t), e
            }(Error), Vt = function (t) {
                function e(t) {
                    ct()(this, e);
                    var n = K()(this, (e.__proto__ || G()(e)).call(this));
                    return n.parent = t, n.transport = null, n.payParser = new _t, n.rtp_channels = new tt.a, n.sessions = {}, n.ontracks = null, n.addState(e.STATE_INITIAL, {}).addState(e.STATE_OPTIONS, {
                        activate: n.sendOptions,
                        finishTransition: n.onOptions
                    }).addState(e.STATE_DESCRIBE, {
                        activate: n.sendDescribe,
                        finishTransition: n.onDescribe
                    }).addState(e.STATE_SETUP, {
                        activate: n.sendSetup,
                        finishTransition: n.onSetup
                    }).addState(e.STATE_STREAMS, {}).addState(e.STATE_TEARDOWN, {
                        activate: function () {
                            n.started = !1
                        }, finishTransition: function () {
                            return n.transitionTo(e.STATE_INITIAL)
                        }
                    }).addTransition(e.STATE_INITIAL, e.STATE_OPTIONS).addTransition(e.STATE_INITIAL, e.STATE_TEARDOWN).addTransition(e.STATE_OPTIONS, e.STATE_DESCRIBE).addTransition(e.STATE_DESCRIBE, e.STATE_SETUP).addTransition(e.STATE_SETUP, e.STATE_STREAMS).addTransition(e.STATE_TEARDOWN, e.STATE_INITIAL).addTransition(e.STATE_STREAMS, e.STATE_TEARDOWN).addTransition(e.STATE_SETUP, e.STATE_TEARDOWN).addTransition(e.STATE_DESCRIBE, e.STATE_TEARDOWN).addTransition(e.STATE_OPTIONS, e.STATE_TEARDOWN), n.reset(), n.shouldReconnect = !1, n
                }

                return Y()(e, t), ft()(e, null, [{
                    key: "USER_AGENT", get: function () {
                        return "SFRtsp 0.3"
                    }
                }, {
                    key: "STATE_INITIAL", get: function () {
                        return 1
                    }
                }, {
                    key: "STATE_OPTIONS", get: function () {
                        return 2
                    }
                }, {
                    key: "STATE_DESCRIBE", get: function () {
                        return 4
                    }
                }, {
                    key: "STATE_SETUP", get: function () {
                        return 8
                    }
                }, {
                    key: "STATE_STREAMS", get: function () {
                        return 16
                    }
                }, {
                    key: "STATE_TEARDOWN", get: function () {
                        return 32
                    }
                }, {
                    key: "STATE_PLAY", get: function () {
                        return 64
                    }
                }, {
                    key: "STATE_PLAYING", get: function () {
                        return 128
                    }
                }, {
                    key: "STATE_PAUSE", get: function () {
                        return 256
                    }
                }, {
                    key: "STATE_PAUSED", get: function () {
                        return 512
                    }
                }]), ft()(e, [{
                    key: "destroy", value: function () {
                        this.parent = null
                    }
                }, {
                    key: "setSource", value: function (t) {
                        this.reset(), this.endpoint = t, this.url = t.protocol + "://" + t.location + t.urlpath
                    }
                }, {
                    key: "onConnected", value: function () {
                        this.rtpFactory && (this.rtpFactory = null), this.shouldReconnect && this.start()
                    }
                }, {
                    key: "onDisconnected", value: function () {
                        var t = q()(U.a.mark(function t() {
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.reset(), this.shouldReconnect = !0, t.next = 4, this.transitionTo(e.STATE_TEARDOWN);
                                    case 4:
                                        return t.next = 6, this.transitionTo(e.STATE_INITIAL);
                                    case 6:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "start", value: function () {
                        if (this.currentState.name !== e.STATE_STREAMS) return this.transitionTo(e.STATE_OPTIONS);
                        var t = [];
                        for (var n in this.sessions) t.push(this.sessions[n].sendPlay());
                        return J.a.all(t)
                    }
                }, {
                    key: "onData", value: function (t) {
                        var e = t[1];
                        this.rtp_channels.has(e) && this.onRTP({packet: t.subarray(4), type: e})
                    }
                }, {
                    key: "useRTPChannel", value: function (t) {
                        this.rtp_channels.add(t)
                    }
                }, {
                    key: "forgetRTPChannel", value: function (t) {
                        this.rtp_channels.delete(t)
                    }
                }, {
                    key: "stop", value: function () {
                        this.shouldReconnect = !1;
                        var t = [];
                        for (var e in this.sessions) t.push(this.sessions[e].sendPause());
                        return J.a.all(t)
                    }
                }, {
                    key: "reset", value: function () {
                        var t = q()(U.a.mark(function t() {
                            var n, r;
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        for (n in this.authenticator = "", this.methods = [], this.tracks = [], this.rtpBuffer = {}, this.streams) this.streams[n].reset();
                                        for (r in this.sessions) this.sessions[r].reset();
                                        if (this.streams = {}, this.sessions = {}, this.contentBase = "", !this.currentState) {
                                            t.next = 17;
                                            break
                                        }
                                        if (this.currentState.name == e.STATE_INITIAL) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.next = 13, this.transitionTo(e.STATE_TEARDOWN);
                                    case 13:
                                        return t.next = 15, this.transitionTo(e.STATE_INITIAL);
                                    case 15:
                                        t.next = 19;
                                        break;
                                    case 17:
                                        return t.next = 19, this.transitionTo(e.STATE_INITIAL);
                                    case 19:
                                        this.sdp = null, this.interleaveChannelIndex = 0, this.session = null, this.timeOffset = {}, this.lastTimestamp = {};
                                    case 24:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "reconnect", value: function () {
                        var t = q()(U.a.mark(function t() {
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.reset();
                                    case 2:
                                        if (this.currentState.name == e.STATE_INITIAL) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 5, this.transitionTo(e.STATE_TEARDOWN);
                                    case 5:
                                    case 8:
                                        return t.abrupt("return", this.transitionTo(e.STATE_OPTIONS));
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "supports", value: function (t) {
                        return this.methods.includes(t)
                    }
                }, {
                    key: "parse", value: function (t) {
                        Lt.debug(t.payload);
                        var e = t.payload.split("\r\n\r\n"), n = Et.parse(e[0]);
                        if (Number(n.headers["content-length"])) {
                            var r = t.payload.split("\r\n\r\n");
                            n.body = r[1]
                        } else n.body = "";
                        return n
                    }
                }, {
                    key: "sendRequest", value: function (t, n) {
                        var r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return this.cSeq++, O()(i, {
                            CSeq: this.cSeq,
                            "User-Agent": e.USER_AGENT
                        }), this.authenticator && (i.Authorization = this.authenticator(t)), this.send(Et.build(t, n, i, s), t).catch(function (e) {
                            if (e instanceof Mt && !i.Authorization) return r.sendRequest(t, n, i, s);
                            throw e
                        })
                    }
                }, {
                    key: "send", value: function () {
                        var t = q()(U.a.mark(function t(e, n) {
                            var r, i, s, a, o, u, h, c, l, f, d, p, v, y, g, m, S, b, k = this;
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.transport) {
                                            t.next = 63;
                                            break
                                        }
                                        return t.prev = 1, t.next = 4, this.transport.ready;
                                    case 4:
                                        t.next = 10;
                                        break;
                                    case 6:
                                        throw t.prev = 6, t.t0 = t.catch(1), this.onDisconnected(), t.t0;
                                    case 10:
                                        return Lt.debug(e), t.next = 13, this.transport.send(e);
                                    case 13:
                                        if (r = t.sent, 401 != (i = this.parse(r)).code) {
                                            t.next = 57;
                                            break
                                        }
                                        if (Lt.debug(i.headers["www-authenticate"]), s = i.headers["www-authenticate"], a = s.substring(0, s.indexOf(" ")), s = s.substr(a.length + 1), o = s.split(","), (u = this.parent.endpoint).user && u.pass) {
                                            t.next = 31;
                                            break
                                        }
                                        return t.prev = 23, t.next = 26, this.parent.queryCredentials.call(this.parent);
                                    case 26:
                                        t.next = 31;
                                        break;
                                    case 28:
                                        throw t.prev = 28, t.t1 = t.catch(23), new Mt;
                                    case 31:
                                        if ("digest" != a.toLowerCase()) {
                                            t.next = 55;
                                            break
                                        }
                                        for (h = {}, c = !0, l = !1, f = void 0, t.prev = 36, d = nt()(o); !(c = (p = d.next()).done); c = !0) v = p.value, y = v.trim(), g = y.split("="), m = C()(g, 2), S = m[0], b = m[1], h[S] = b.substr(1, b.length - 2);
                                        t.next = 44;
                                        break;
                                    case 40:
                                        t.prev = 40, t.t2 = t.catch(36), l = !0, f = t.t2;
                                    case 44:
                                        t.prev = 44, t.prev = 45, !c && d.return && d.return();
                                    case 47:
                                        if (t.prev = 47, !l) {
                                            t.next = 50;
                                            break
                                        }
                                        throw f;
                                    case 50:
                                        return t.finish(47);
                                    case 51:
                                        return t.finish(44);
                                    case 52:
                                        this.authenticator = function (t) {
                                            var e = k.parent.endpoint, n = bt(e.user + ":" + h.realm + ":" + e.pass),
                                                r = bt(t + ":" + k.url), i = bt(n + ":" + h.nonce + ":" + r);
                                            return 'Digest username="' + e.user + '", realm="' + h.realm + '", nonce="' + h.nonce + '", uri="' + k.url + '", response="' + i + '"'
                                        }, t.next = 56;
                                        break;
                                    case 55:
                                        this.authenticator = function () {
                                            return "Basic " + btoa(k.parent.endpoint.auth)
                                        };
                                    case 56:
                                        throw new Mt(i);
                                    case 57:
                                        if (!(i.code >= 300)) {
                                            t.next = 60;
                                            break
                                        }
                                        throw Lt.error(i.statusLine), new Ut({
                                            msg: "RTSP error: " + i.code + " " + i.statusLine,
                                            parsed: i
                                        });
                                    case 60:
                                        return t.abrupt("return", i);
                                    case 63:
                                        return t.abrupt("return", J.a.reject("No transport attached"));
                                    case 64:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 6], [23, 28], [36, 40, 44, 52], [45, , 47, 51]])
                        }));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "sendOptions", value: function () {
                        return this.reset(), this.started = !0, this.cSeq = 0, this.sendRequest("OPTIONS", "*", {})
                    }
                }, {
                    key: "onOptions", value: function (t) {
                        this.methods = t.headers.public.split(",").map(function (t) {
                            return t.trim()
                        }), this.transitionTo(e.STATE_DESCRIBE)
                    }
                }, {
                    key: "sendDescribe", value: function () {
                        var t = this;
                        return this.sendRequest("DESCRIBE", this.url, {Accept: "application/sdp"}).then(function (e) {
                            return t.sdp = new $, t.sdp.parse(e.body).catch(function () {
                                throw new Error("Failed to parse SDP")
                            }).then(function () {
                                return e
                            })
                        })
                    }
                }, {
                    key: "onDescribe", value: function (t) {
                        if (this.contentBase = t.headers["content-base"] || this.url, this.tracks = this.sdp.getMediaBlockList(), this.rtpFactory = new Tt(this.sdp), Lt.log("SDP contained " + this.tracks.length + " track(s). Calling SETUP for each."), t.headers.session && (this.session = t.headers.session), !this.tracks.length) throw new Error("No tracks in SDP");
                        this.transitionTo(e.STATE_SETUP)
                    }
                }, {
                    key: "sendSetup", value: function () {
                        var t = this, e = [], n = !0, r = !1, i = void 0;
                        try {
                            for (var s, a = nt()(this.tracks); !(n = (s = a.next()).done); n = !0) {
                                var o = s.value;
                                Lt.log("setup track: " + o);
                                var u = this.sdp.getMediaBlock(o);
                                if (M.string_map[u.rtpmap[u.fmt[0]].name]) {
                                    this.streams[o] = new X(this, u);
                                    var h = this.streams[o].start();
                                    this.parent.sampleQueues[M.string_map[u.rtpmap[u.fmt[0]].name]] = [], this.rtpBuffer[u.fmt[0]] = [], e.push(h.then(function (e) {
                                        var n = e.track, r = e.data;
                                        t.timeOffset[n.fmt[0]] = 0;
                                        try {
                                            var i = r.headers["rtp-info"].split(";"), s = !0, a = !1, o = void 0;
                                            try {
                                                for (var u, h = nt()(i); !(s = (u = h.next()).done); s = !0) {
                                                    var c = u.value.split("="), l = C()(c, 2), f = l[0];
                                                    l[1];
                                                    "rtptime" === f && (t.timeOffset[n.fmt[0]] = 0)
                                                }
                                            } catch (t) {
                                                a = !0, o = t
                                            } finally {
                                                try {
                                                    !s && h.return && h.return()
                                                } finally {
                                                    if (a) throw o
                                                }
                                            }
                                        } catch (t) {
                                        }
                                        var d = {timescale: 0, scaleFactor: 0};
                                        if (n.fmtp["sprop-parameter-sets"]) {
                                            var p = n.fmtp["sprop-parameter-sets"].split(",");
                                            d = {sps: D(p[0]), pps: D(p[1])}
                                        } else if (n.fmtp.config) {
                                            var v = n.fmtp.config;
                                            t.has_config = "0" != n.fmtp.cpresent, "MPEG4-GENERIC" == n.rtpmap[n.fmt[0]].name ? (d = {config: Ct.parseAudioSpecificConfig(x(v))}, t.payParser.aacparser.setConfig(d.config)) : v && (d = {config: Ct.parseStreamMuxConfig(x(v))}, t.payParser.aacparser.setConfig(d.config))
                                        }
                                        d.duration = t.sdp.sessionBlock.range ? t.sdp.sessionBlock.range[1] - t.sdp.sessionBlock.range[0] : 1, t.parent.seekable = d.duration > 1;
                                        var y = {
                                            track: n,
                                            offset: t.timeOffset[n.fmt[0]],
                                            type: M.string_map[n.rtpmap[n.fmt[0]].name],
                                            params: d,
                                            duration: d.duration
                                        };
                                        console.log(y, t.timeOffset);
                                        var g = r.headers.session.split(";")[0];
                                        return t.sessions[g] || (t.sessions[g] = new Ot(t, g)), y
                                    }))
                                }
                            }
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return J.a.all(e).then(function (e) {
                            var n = [];
                            for (var r in t.sessions) n.push(t.sessions[r].start());
                            return J.a.all(n).then(function () {
                                t.ontracks && t.ontracks(e)
                            })
                        }).catch(function (e) {
                            console.error(e), t.stop(), t.reset()
                        })
                    }
                }, {
                    key: "onSetup", value: function () {
                        this.transitionTo(e.STATE_STREAMS)
                    }
                }, {
                    key: "onRTP", value: function (t) {
                        if (this.rtpFactory) {
                            var e = this.rtpFactory.build(t.packet, this.sdp);
                            if (e.type) if (void 0 !== this.timeOffset[e.pt]) {
                                void 0 === this.lastTimestamp[e.pt] && (this.lastTimestamp[e.pt] = e.timestamp - this.timeOffset[e.pt]);
                                var n = this.rtpBuffer[e.pt];
                                for (n.push(e); n.length;) {
                                    var r = n.shift();
                                    if (r.timestamp = r.timestamp - this.timeOffset[r.pt] - this.lastTimestamp[r.pt], r.media) {
                                        var i = this.payParser.parse(r);
                                        i && this.parent.sampleQueues[r.type].push(i)
                                    }
                                }
                            } else this.rtpBuffer[e.pt].push(e)
                        }
                    }
                }]), e
            }(z), qt = function (t, e) {
                var n = document.createElement(t);
                return n.className = e, n
            }, Ft = function (t) {
                return document.createTextNode(t)
            }, Ht = function () {
                function t(e, n) {
                    ct()(this, t), e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = n)
                }

                return ft()(t, null, [{
                    key: "hexDigits", get: function () {
                        return "0123456789ABCDEF"
                    }
                }, {
                    key: "reTime", get: function () {
                        return /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/
                    }
                }]), ft()(t, [{
                    key: "get", value: function (t) {
                        if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw"Requesting byte offset " + t + " on a stream of length " + this.enc.length;
                        return this.enc[t]
                    }
                }, {
                    key: "hexByte", value: function (e) {
                        return t.hexDigits.charAt(e >> 4 & 15) + t.hexDigits.charAt(15 & e)
                    }
                }, {
                    key: "hexDump", value: function (t, e, n) {
                        for (var r = "", i = t; i < e; ++i) if (r += this.hexByte(this.get(i)), !0 !== n) switch (15 & i) {
                            case 7:
                                r += "  ";
                                break;
                            case 15:
                                r += "\n";
                                break;
                            default:
                                r += " "
                        }
                        return r
                    }
                }, {
                    key: "parseStringISO", value: function (t, e) {
                        for (var n = "", r = t; r < e; ++r) n += String.fromCharCode(this.get(r));
                        return n
                    }
                }, {
                    key: "parseStringUTF", value: function (t, e) {
                        for (var n = "", r = t; r < e;) {
                            var i = this.get(r++);
                            n += i < 128 ? String.fromCharCode(i) : i > 191 && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                        }
                        return n
                    }
                }, {
                    key: "parseStringBMP", value: function (t, e) {
                        for (var n = "", r = t; r < e; r += 2) {
                            var i = this.get(r), s = this.get(r + 1);
                            n += String.fromCharCode((i << 8) + s)
                        }
                        return n
                    }
                }, {
                    key: "parseTime", value: function (e, n) {
                        var r = this.parseStringISO(e, n), i = t.reTime.exec(r);
                        return i ? (r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (r += ":" + i[5], i[6] && (r += ":" + i[6], i[7] && (r += "." + i[7]))), i[8] && (r += " UTC", "Z" != i[8] && (r += i[8], i[9] && (r += ":" + i[9]))), r) : "Unrecognized time: " + r
                    }
                }, {
                    key: "parseInteger", value: function (t, e) {
                        var n = e - t;
                        if (n > 4) {
                            n <<= 3;
                            var r = this.get(t);
                            if (0 === r) n -= 8; else for (; r < 128;) r <<= 1, --n;
                            return "(" + n + " bit)"
                        }
                        for (var i = 0, s = t; s < e; ++s) i = i << 8 | this.get(s);
                        return i
                    }
                }, {
                    key: "parseBitString", value: function (t, e) {
                        var n = this.get(t), r = (e - t - 1 << 3) - n, i = "(" + r + " bit)";
                        if (r <= 20) {
                            var s = n;
                            i += " ";
                            for (var a = e - 1; a > t; --a) {
                                for (var o = this.get(a), u = s; u < 8; ++u) i += o >> u & 1 ? "1" : "0";
                                s = 0
                            }
                        }
                        return i
                    }
                }, {
                    key: "parseOctetString", value: function (t, e) {
                        var n = e - t, r = "(" + n + " byte) ";
                        n > 100 && (e = t + 100);
                        for (var i = t; i < e; ++i) r += this.hexByte(this.get(i));
                        return n > 100 && (r += "…"), r
                    }
                }, {
                    key: "parseOID", value: function (t, e) {
                        for (var n = "", r = 0, i = 0, s = t; s < e; ++s) {
                            var a = this.get(s);
                            if (r = r << 7 | 127 & a, i += 7, !(128 & a)) {
                                if ("" === n) {
                                    var o = r < 80 ? r < 40 ? 0 : 1 : 2;
                                    n = o + "." + (r - 40 * o)
                                } else n += "." + (i >= 31 ? "bigint" : r);
                                r = i = 0
                            }
                        }
                        return n
                    }
                }]), t
            }(), jt = function () {
                function t(e, n, r, i, s) {
                    ct()(this, t), this.stream = e, this.header = n, this.length = r, this.tag = i, this.sub = s
                }

                return ft()(t, null, [{
                    key: "reSeemsASCII", get: function () {
                        return /^[ -~]+$/
                    }
                }]), ft()(t, [{
                    key: "typeName", value: function () {
                        if (void 0 === this.tag) return "unknown";
                        var t = this.tag >> 6, e = (this.tag, 31 & this.tag);
                        switch (t) {
                            case 0:
                                switch (e) {
                                    case 0:
                                        return "EOC";
                                    case 1:
                                        return "BOOLEAN";
                                    case 2:
                                        return "INTEGER";
                                    case 3:
                                        return "BIT_STRING";
                                    case 4:
                                        return "OCTET_STRING";
                                    case 5:
                                        return "NULL";
                                    case 6:
                                        return "OBJECT_IDENTIFIER";
                                    case 7:
                                        return "ObjectDescriptor";
                                    case 8:
                                        return "EXTERNAL";
                                    case 9:
                                        return "REAL";
                                    case 10:
                                        return "ENUMERATED";
                                    case 11:
                                        return "EMBEDDED_PDV";
                                    case 12:
                                        return "UTF8String";
                                    case 16:
                                        return "SEQUENCE";
                                    case 17:
                                        return "SET";
                                    case 18:
                                        return "NumericString";
                                    case 19:
                                        return "PrintableString";
                                    case 20:
                                        return "TeletexString";
                                    case 21:
                                        return "VideotexString";
                                    case 22:
                                        return "IA5String";
                                    case 23:
                                        return "UTCTime";
                                    case 24:
                                        return "GeneralizedTime";
                                    case 25:
                                        return "GraphicString";
                                    case 26:
                                        return "VisibleString";
                                    case 27:
                                        return "GeneralString";
                                    case 28:
                                        return "UniversalString";
                                    case 30:
                                        return "BMPString";
                                    default:
                                        return "Universal_" + e.toString(16)
                                }
                            case 1:
                                return "Application_" + e.toString(16);
                            case 2:
                                return "[" + e + "]";
                            case 3:
                                return "Private_" + e.toString(16)
                        }
                    }
                }, {
                    key: "content", value: function () {
                        if (void 0 === this.tag) return null;
                        var e = this.tag >> 6, n = 31 & this.tag, r = this.posContent(), i = Math.abs(this.length);
                        if (0 !== e) {
                            if (null !== this.sub) return "(" + this.sub.length + " elem)";
                            var s = this.stream.parseStringISO(r, r + Math.min(i, 100));
                            return t.reSeemsASCII.test(s) ? s.substring(0, 200) + (s.length > 200 ? "…" : "") : this.stream.parseOctetString(r, r + i)
                        }
                        switch (n) {
                            case 1:
                                return 0 === this.stream.get(r) ? "false" : "true";
                            case 2:
                                return this.stream.parseInteger(r, r + i);
                            case 3:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(r, r + i);
                            case 4:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(r, r + i);
                            case 6:
                                return this.stream.parseOID(r, r + i);
                            case 16:
                            case 17:
                                return "(" + this.sub.length + " elem)";
                            case 12:
                                return this.stream.parseStringUTF(r, r + i);
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 26:
                                return this.stream.parseStringISO(r, r + i);
                            case 30:
                                return this.stream.parseStringBMP(r, r + i);
                            case 23:
                            case 24:
                                return this.stream.parseTime(r, r + i)
                        }
                        return null
                    }
                }, {
                    key: "toString", value: function () {
                        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                    }
                }, {
                    key: "print", value: function (t) {
                        if (void 0 === t && (t = ""), document.writeln(t + this), null !== this.sub) {
                            t += "  ";
                            for (var e = 0, n = this.sub.length; e < n; ++e) this.sub[e].print(t)
                        }
                    }
                }, {
                    key: "toPrettyString", value: function (t) {
                        void 0 === t && (t = "");
                        var e = t + this.typeName() + " @" + this.stream.pos;
                        if (this.length >= 0 && (e += "+"), e += this.length, 32 & this.tag ? e += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                            t += "  ";
                            for (var n = 0, r = this.sub.length; n < r; ++n) e += this.sub[n].toPrettyString(t)
                        }
                        return e
                    }
                }, {
                    key: "toDOM", value: function () {
                        var t = qt("div", "node");
                        t.asn1 = this;
                        var e = qt("div", "head"), n = this.typeName().replace(/_/g, " ");
                        e.innerHTML = n;
                        var r = this.content();
                        if (null !== r) {
                            r = String(r).replace(/</g, "&lt;");
                            var i = qt("span", "preview");
                            i.appendChild(Ft(r)), e.appendChild(i)
                        }
                        t.appendChild(e), this.node = t, this.head = e;
                        var s = qt("div", "value");
                        if (n = "Offset: " + this.stream.pos + "<br/>", n += "Length: " + this.header + "+", this.length >= 0 ? n += this.length : n += -this.length + " (undefined)", 32 & this.tag ? n += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (n += "<br/>(encapsulates)"), null !== r && (n += "<br/>Value:<br/><b>" + r + "</b>", "object" === ("undefined" == typeof oids ? "undefined" : _()(oids)) && 6 == this.tag)) {
                            var a = oids[r];
                            a && (a.d && (n += "<br/>" + a.d), a.c && (n += "<br/>" + a.c), a.w && (n += "<br/>(warning!)"))
                        }
                        s.innerHTML = n, t.appendChild(s);
                        var o = qt("div", "sub");
                        if (null !== this.sub) for (var u = 0, h = this.sub.length; u < h; ++u) o.appendChild(this.sub[u].toDOM());
                        return t.appendChild(o), e.onclick = function () {
                            t.className = "node collapsed" == t.className ? "node" : "node collapsed"
                        }, t
                    }
                }, {
                    key: "posStart", value: function () {
                        return this.stream.pos
                    }
                }, {
                    key: "posContent", value: function () {
                        return this.stream.pos + this.header
                    }
                }, {
                    key: "posEnd", value: function () {
                        return this.stream.pos + this.header + Math.abs(this.length)
                    }
                }, {
                    key: "fakeHover", value: function (t) {
                        this.node.className += " hover", t && (this.head.className += " hover")
                    }
                }, {
                    key: "fakeOut", value: function (t) {
                        var e = / ?hover/;
                        this.node.className = this.node.className.replace(e, ""), t && (this.head.className = this.head.className.replace(e, ""))
                    }
                }, {
                    key: "toHexDOM_sub", value: function (t, e, n, r, i) {
                        if (!(r >= i)) {
                            var s = qt("span", e);
                            s.appendChild(Ft(n.hexDump(r, i))), t.appendChild(s)
                        }
                    }
                }, {
                    key: "toHexDOM", value: function (t) {
                        var e = qt("span", "hex");
                        if (void 0 === t && (t = e), this.head.hexNode = e, this.head.onmouseover = function () {
                                this.hexNode.className = "hexCurrent"
                            }, this.head.onmouseout = function () {
                                this.hexNode.className = "hex"
                            }, e.asn1 = this, e.onmouseover = function () {
                                var e = !t.selected;
                                e && (t.selected = this.asn1, this.className = "hexCurrent"), this.asn1.fakeHover(e)
                            }, e.onmouseout = function () {
                                var e = t.selected == this.asn1;
                                this.asn1.fakeOut(e), e && (t.selected = null, this.className = "hex")
                            }, this.toHexDOM_sub(e, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(e, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) e.appendChild(Ft(this.stream.hexDump(this.posContent(), this.posEnd()))); else if (this.sub.length > 0) {
                            var n = this.sub[0], r = this.sub[this.sub.length - 1];
                            this.toHexDOM_sub(e, "intro", this.stream, this.posContent(), n.posStart());
                            for (var i = 0, s = this.sub.length; i < s; ++i) e.appendChild(this.sub[i].toHexDOM(t));
                            this.toHexDOM_sub(e, "outro", this.stream, r.posEnd(), this.posEnd())
                        }
                        return e
                    }
                }, {
                    key: "toHexString", value: function (t) {
                        return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                    }
                }]), t
            }();
            jt.decodeLength = function (t) {
                var e = t.get(), n = 127 & e;
                if (n == e) return n;
                if (n > 3) throw"Length over 24 bits not supported at position " + (t.pos - 1);
                if (0 === n) return -1;
                e = 0;
                for (var r = 0; r < n; ++r) e = e << 8 | t.get();
                return e
            }, jt.hasContent = function (t, e, n) {
                if (32 & t) return !0;
                if (t < 3 || t > 4) return !1;
                var r = new Ht(n);
                if (3 == t && r.get(), r.get() >> 6 & 1) return !1;
                try {
                    var i = jt.decodeLength(r);
                    return r.pos - n.pos + i == e
                } catch (t) {
                    return !1
                }
            }, jt.decode = function (t) {
                t instanceof Ht || (t = new Ht(t, 0));
                var e = new Ht(t), n = t.get(), r = jt.decodeLength(t), i = t.pos - e.pos, s = null;
                if (jt.hasContent(n, r, t)) {
                    var a = t.pos;
                    if (3 == n && t.get(), s = [], r >= 0) {
                        for (var o = a + r; t.pos < o;) s[s.length] = jt.decode(t);
                        if (t.pos != o) throw"Content size is not correct for container starting at offset " + a
                    } else try {
                        for (; ;) {
                            var u = jt.decode(t);
                            if (0 === u.tag) break;
                            s[s.length] = u
                        }
                        r = a - t.pos
                    } catch (t) {
                        throw"Exception while decoding undefined length content: " + t
                    }
                } else t.pos += r;
                return new jt(e, i, r, n, s)
            }, jt.test = function () {
                for (var t = [{value: [39], expected: 39}, {
                    value: [129, 201],
                    expected: 201
                }, {value: [131, 254, 220, 186], expected: 16702650}], e = 0, n = t.length; e < n; ++e) {
                    var r = new Ht(t[e].value, 0), i = jt.decodeLength(r);
                    i != t[e].expected && document.write("In test[" + e + "] expected " + t[e].expected + " got " + i + "\n")
                }
            };
            var Gt = function t() {
                ct()(this, t), this.i = 0, this.j = 0, this.S = []
            };
            Gt.prototype.init = function (t) {
                var e, n, r;
                for (e = 0; e < 256; ++e) this.S[e] = e;
                for (n = 0, e = 0; e < 256; ++e) n = n + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[n], this.S[n] = r;
                this.i = 0, this.j = 0
            }, Gt.prototype.next = function () {
                var t;
                return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
            };
            var zt, Kt, Wt, Zt = 256;
            if (null == Kt) {
                var $t;
                if (Kt = new Array, Wt = 0, window.crypto && window.crypto.getRandomValues) {
                    var Yt = new Uint32Array(256);
                    for (window.crypto.getRandomValues(Yt), $t = 0; $t < Yt.length; ++$t) Kt[Wt++] = 255 & Yt[$t]
                }
                var Qt = function t(e) {
                    if (this.count = this.count || 0, this.count >= 256 || Wt >= Zt) window.removeEventListener ? window.removeEventListener("mousemove", t, !1) : window.detachEvent && window.detachEvent("onmousemove", t); else try {
                        var n = e.x + e.y;
                        Kt[Wt++] = 255 & n, this.count += 1
                    } catch (t) {
                    }
                };
                window.addEventListener ? window.addEventListener("mousemove", Qt, !1) : window.attachEvent && window.attachEvent("onmousemove", Qt)
            }

            function Jt() {
                if (null == zt) {
                    for (zt = new Gt; Wt < Zt;) {
                        var t = Math.floor(65536 * Math.random());
                        Kt[Wt++] = 255 & t
                    }
                    for (zt.init(Kt), Wt = 0; Wt < Kt.length; ++Wt) Kt[Wt] = 0;
                    Wt = 0
                }
                return zt.next()
            }

            var Xt, te = function t() {
                ct()(this, t)
            };
            te.prototype.nextBytes = function (t) {
                var e;
                for (e = 0; e < t.length; ++e) t[e] = Jt()
            };
            var ee = function t(e, n, r) {
                ct()(this, t), null != e && ("number" == typeof e ? this.fromNumber(e, n, r) : null == n && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, n))
            };

            function ne() {
                return new ee(null)
            }

            "Microsoft Internet Explorer" == navigator.appName ? (ee.prototype.am = function (t, e, n, r, i, s) {
                for (var a = 32767 & e, o = e >> 15; --s >= 0;) {
                    var u = 32767 & this[t], h = this[t++] >> 15, c = o * u + h * a;
                    i = ((u = a * u + ((32767 & c) << 15) + n[r] + (1073741823 & i)) >>> 30) + (c >>> 15) + o * h + (i >>> 30), n[r++] = 1073741823 & u
                }
                return i
            }, Xt = 30) : "Netscape" != navigator.appName ? (ee.prototype.am = function (t, e, n, r, i, s) {
                for (; --s >= 0;) {
                    var a = e * this[t++] + n[r] + i;
                    i = Math.floor(a / 67108864), n[r++] = 67108863 & a
                }
                return i
            }, Xt = 26) : (ee.prototype.am = function (t, e, n, r, i, s) {
                for (var a = 16383 & e, o = e >> 14; --s >= 0;) {
                    var u = 16383 & this[t], h = this[t++] >> 14, c = o * u + h * a;
                    i = ((u = a * u + ((16383 & c) << 14) + n[r] + i) >> 28) + (c >> 14) + o * h, n[r++] = 268435455 & u
                }
                return i
            }, Xt = 28), ee.prototype.DB = Xt, ee.prototype.DM = (1 << Xt) - 1, ee.prototype.DV = 1 << Xt;
            ee.prototype.FV = Math.pow(2, 52), ee.prototype.F1 = 52 - Xt, ee.prototype.F2 = 2 * Xt - 52;
            var re, ie, se = "0123456789abcdefghijklmnopqrstuvwxyz", ae = [];
            for (re = "0".charCodeAt(0), ie = 0; ie <= 9; ++ie) ae[re++] = ie;
            for (re = "a".charCodeAt(0), ie = 10; ie < 36; ++ie) ae[re++] = ie;
            for (re = "A".charCodeAt(0), ie = 10; ie < 36; ++ie) ae[re++] = ie;

            function oe(t) {
                return se.charAt(t)
            }

            function ue(t, e) {
                var n = ae[t.charCodeAt(e)];
                return null == n ? -1 : n
            }

            function he(t) {
                var e = ne();
                return e.fromInt(t), e
            }

            function ce(t) {
                var e, n = 1;
                return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n
            }

            var le = function t(e) {
                ct()(this, t), this.m = e
            };
            le.prototype.convert = function (t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
            }, le.prototype.revert = function (t) {
                return t
            }, le.prototype.reduce = function (t) {
                t.divRemTo(this.m, null, t)
            }, le.prototype.mulTo = function (t, e, n) {
                t.multiplyTo(e, n), this.reduce(n)
            }, le.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
            };
            var fe = function t(e) {
                ct()(this, t), this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
            };

            function de(t, e) {
                return t & e
            }

            function pe(t, e) {
                return t | e
            }

            function ve(t, e) {
                return t ^ e
            }

            function ye(t, e) {
                return t & ~e
            }

            function ge(t) {
                if (0 == t) return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
            }

            function me(t) {
                for (var e = 0; 0 != t;) t &= t - 1, ++e;
                return e
            }

            function Se() {
            }

            function be(t) {
                return t
            }

            function ke(t) {
                this.r2 = ne(), this.q3 = ne(), ee.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
            }

            fe.prototype.convert = function (t) {
                var e = ne();
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(ee.ZERO) > 0 && this.m.subTo(e, e), e
            }, fe.prototype.revert = function (t) {
                var e = ne();
                return t.copyTo(e), this.reduce(e), e
            }, fe.prototype.reduce = function (t) {
                for (; t.t <= this.mt2;) t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var n = 32767 & t[e],
                        r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++
                }
                t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
            }, fe.prototype.mulTo = function (t, e, n) {
                t.multiplyTo(e, n), this.reduce(n)
            }, fe.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
            }, ee.prototype.copyTo = function (t) {
                for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                t.t = this.t, t.s = this.s
            }, ee.prototype.fromInt = function (t) {
                this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }, ee.prototype.fromString = function (t, e) {
                var n;
                if (16 == e) n = 4; else if (8 == e) n = 3; else if (256 == e) n = 8; else if (2 == e) n = 1; else if (32 == e) n = 5; else {
                    if (4 != e) return void this.fromRadix(t, e);
                    n = 2
                }
                this.t = 0, this.s = 0;
                for (var r = t.length, i = !1, s = 0; --r >= 0;) {
                    var a = 8 == n ? 255 & t[r] : ue(t, r);
                    a < 0 ? "-" == t.charAt(r) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += n) >= this.DB && (s -= this.DB))
                }
                8 == n && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), i && ee.ZERO.subTo(this, this)
            }, ee.prototype.clamp = function () {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
            }, ee.prototype.dlShiftTo = function (t, e) {
                var n;
                for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
                for (n = t - 1; n >= 0; --n) e[n] = 0;
                e.t = this.t + t, e.s = this.s
            }, ee.prototype.drShiftTo = function (t, e) {
                for (var n = t; n < this.t; ++n) e[n - t] = this[n];
                e.t = Math.max(this.t - t, 0), e.s = this.s
            }, ee.prototype.lShiftTo = function (t, e) {
                var n, r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB),
                    o = this.s << r & this.DM;
                for (n = this.t - 1; n >= 0; --n) e[n + a + 1] = this[n] >> i | o, o = (this[n] & s) << r;
                for (n = a - 1; n >= 0; --n) e[n] = 0;
                e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp()
            }, ee.prototype.rShiftTo = function (t, e) {
                e.s = this.s;
                var n = Math.floor(t / this.DB);
                if (n >= this.t) e.t = 0; else {
                    var r = t % this.DB, i = this.DB - r, s = (1 << r) - 1;
                    e[0] = this[n] >> r;
                    for (var a = n + 1; a < this.t; ++a) e[a - n - 1] |= (this[a] & s) << i, e[a - n] = this[a] >> r;
                    r > 0 && (e[this.t - n - 1] |= (this.s & s) << i), e.t = this.t - n, e.clamp()
                }
            }, ee.prototype.subTo = function (t, e) {
                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] - t[n], e[n++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r -= t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; n < t.t;) r -= t[n], e[n++] = r & this.DM, r >>= this.DB;
                    r -= t.s
                }
                e.s = r < 0 ? -1 : 0, r < -1 ? e[n++] = this.DV + r : r > 0 && (e[n++] = r), e.t = n, e.clamp()
            }, ee.prototype.multiplyTo = function (t, e) {
                var n = this.abs(), r = t.abs(), i = n.t;
                for (e.t = i + r.t; --i >= 0;) e[i] = 0;
                for (i = 0; i < r.t; ++i) e[i + n.t] = n.am(0, r[i], e, i, 0, n.t);
                e.s = 0, e.clamp(), this.s != t.s && ee.ZERO.subTo(e, e)
            }, ee.prototype.squareTo = function (t) {
                for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0;
                for (n = 0; n < e.t - 1; ++n) {
                    var r = e.am(n, e[n], t, 2 * n, 0, 1);
                    (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
                }
                t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp()
            }, ee.prototype.divRemTo = function (t, e, n) {
                var r = t.abs();
                if (!(r.t <= 0)) {
                    var i = this.abs();
                    if (i.t < r.t) return null != e && e.fromInt(0), void(null != n && this.copyTo(n));
                    null == n && (n = ne());
                    var s = ne(), a = this.s, o = t.s, u = this.DB - ce(r[r.t - 1]);
                    u > 0 ? (r.lShiftTo(u, s), i.lShiftTo(u, n)) : (r.copyTo(s), i.copyTo(n));
                    var h = s.t, c = s[h - 1];
                    if (0 != c) {
                        var l = c * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0), f = this.FV / l,
                            d = (1 << this.F1) / l, p = 1 << this.F2, v = n.t, y = v - h, g = null == e ? ne() : e;
                        for (s.dlShiftTo(y, g), n.compareTo(g) >= 0 && (n[n.t++] = 1, n.subTo(g, n)), ee.ONE.dlShiftTo(h, g), g.subTo(s, s); s.t < h;) s[s.t++] = 0;
                        for (; --y >= 0;) {
                            var m = n[--v] == c ? this.DM : Math.floor(n[v] * f + (n[v - 1] + p) * d);
                            if ((n[v] += s.am(0, m, n, y, 0, h)) < m) for (s.dlShiftTo(y, g), n.subTo(g, n); n[v] < --m;) n.subTo(g, n)
                        }
                        null != e && (n.drShiftTo(h, e), a != o && ee.ZERO.subTo(e, e)), n.t = h, n.clamp(), u > 0 && n.rShiftTo(u, n), a < 0 && ee.ZERO.subTo(n, n)
                    }
                }
            }, ee.prototype.invDigit = function () {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var e = 3 & t;
                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
            }, ee.prototype.isEven = function () {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }, ee.prototype.exp = function (t, e) {
                if (t > 4294967295 || t < 1) return ee.ONE;
                var n = ne(), r = ne(), i = e.convert(this), s = ce(t) - 1;
                for (i.copyTo(n); --s >= 0;) if (e.sqrTo(n, r), (t & 1 << s) > 0) e.mulTo(r, i, n); else {
                    var a = n;
                    n = r, r = a
                }
                return e.revert(n)
            }, ee.prototype.toString = function (t) {
                if (this.s < 0) return "-" + this.negate().toString(t);
                var e;
                if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
                    if (4 != t) return this.toRadix(t);
                    e = 2
                }
                var n, r = (1 << e) - 1, i = !1, s = "", a = this.t, o = this.DB - a * this.DB % e;
                if (a-- > 0) for (o < this.DB && (n = this[a] >> o) > 0 && (i = !0, s = oe(n)); a >= 0;) o < e ? (n = (this[a] & (1 << o) - 1) << e - o, n |= this[--a] >> (o += this.DB - e)) : (n = this[a] >> (o -= e) & r, o <= 0 && (o += this.DB, --a)), n > 0 && (i = !0), i && (s += oe(n));
                return i ? s : "0"
            }, ee.prototype.negate = function () {
                var t = ne();
                return ee.ZERO.subTo(this, t), t
            }, ee.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this
            }, ee.prototype.compareTo = function (t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var n = this.t;
                if (0 != (e = n - t.t)) return this.s < 0 ? -e : e;
                for (; --n >= 0;) if (0 != (e = this[n] - t[n])) return e;
                return 0
            }, ee.prototype.bitLength = function () {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + ce(this[this.t - 1] ^ this.s & this.DM)
            }, ee.prototype.mod = function (t) {
                var e = ne();
                return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(ee.ZERO) > 0 && t.subTo(e, e), e
            }, ee.prototype.modPowInt = function (t, e) {
                var n;
                return n = t < 256 || e.isEven() ? new le(e) : new fe(e), this.exp(t, n)
            }, ee.ZERO = he(0), ee.ONE = he(1), Se.prototype.convert = be, Se.prototype.revert = be, Se.prototype.mulTo = function (t, e, n) {
                t.multiplyTo(e, n)
            }, Se.prototype.sqrTo = function (t, e) {
                t.squareTo(e)
            }, ke.prototype.convert = function (t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                if (t.compareTo(this.m) < 0) return t;
                var e = ne();
                return t.copyTo(e), this.reduce(e), e
            }, ke.prototype.revert = function (t) {
                return t
            }, ke.prototype.reduce = function (t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
            }, ke.prototype.mulTo = function (t, e, n) {
                t.multiplyTo(e, n), this.reduce(n)
            }, ke.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
            };
            var Te = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                we = (1 << 26) / Te[Te.length - 1];

            function Ee(t, e) {
                return new ee(t, e)
            }

            ee.prototype.chunkSize = function (t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }, ee.prototype.toRadix = function (t) {
                if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                var e = this.chunkSize(t), n = Math.pow(t, e), r = he(n), i = ne(), s = ne(), a = "";
                for (this.divRemTo(r, i, s); i.signum() > 0;) a = (n + s.intValue()).toString(t).substr(1) + a, i.divRemTo(r, i, s);
                return s.intValue().toString(t) + a
            }, ee.prototype.fromRadix = function (t, e) {
                this.fromInt(0), null == e && (e = 10);
                for (var n = this.chunkSize(e), r = Math.pow(e, n), i = !1, s = 0, a = 0, o = 0; o < t.length; ++o) {
                    var u = ue(t, o);
                    u < 0 ? "-" == t.charAt(o) && 0 == this.signum() && (i = !0) : (a = e * a + u, ++s >= n && (this.dMultiply(r), this.dAddOffset(a, 0), s = 0, a = 0))
                }
                s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)), i && ee.ZERO.subTo(this, this)
            }, ee.prototype.fromNumber = function (t, e, n) {
                if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(ee.ONE.shiftLeft(t - 1), pe, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(ee.ONE.shiftLeft(t - 1), this); else {
                    var r = [], i = 7 & t;
                    r.length = 1 + (t >> 3), e.nextBytes(r), i > 0 ? r[0] &= (1 << i) - 1 : r[0] = 0, this.fromString(r, 256)
                }
            }, ee.prototype.bitwiseTo = function (t, e, n) {
                var r, i, s = Math.min(t.t, this.t);
                for (r = 0; r < s; ++r) n[r] = e(this[r], t[r]);
                if (t.t < this.t) {
                    for (i = t.s & this.DM, r = s; r < this.t; ++r) n[r] = e(this[r], i);
                    n.t = this.t
                } else {
                    for (i = this.s & this.DM, r = s; r < t.t; ++r) n[r] = e(i, t[r]);
                    n.t = t.t
                }
                n.s = e(this.s, t.s), n.clamp()
            }, ee.prototype.changeBit = function (t, e) {
                var n = ee.ONE.shiftLeft(t);
                return this.bitwiseTo(n, e, n), n
            }, ee.prototype.addTo = function (t, e) {
                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] + t[n], e[n++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r += t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; n < t.t;) r += t[n], e[n++] = r & this.DM, r >>= this.DB;
                    r += t.s
                }
                e.s = r < 0 ? -1 : 0, r > 0 ? e[n++] = r : r < -1 && (e[n++] = this.DV + r), e.t = n, e.clamp()
            }, ee.prototype.dMultiply = function (t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
            }, ee.prototype.dAddOffset = function (t, e) {
                if (0 != t) {
                    for (; this.t <= e;) this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                }
            }, ee.prototype.multiplyLowerTo = function (t, e, n) {
                var r, i = Math.min(this.t + t.t, e);
                for (n.s = 0, n.t = i; i > 0;) n[--i] = 0;
                for (r = n.t - this.t; i < r; ++i) n[i + this.t] = this.am(0, t[i], n, i, 0, this.t);
                for (r = Math.min(t.t, e); i < r; ++i) this.am(0, t[i], n, i, 0, e - i);
                n.clamp()
            }, ee.prototype.multiplyUpperTo = function (t, e, n) {
                --e;
                var r = n.t = this.t + t.t - e;
                for (n.s = 0; --r >= 0;) n[r] = 0;
                for (r = Math.max(e - this.t, 0); r < t.t; ++r) n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
                n.clamp(), n.drShiftTo(1, n)
            }, ee.prototype.modInt = function (t) {
                if (t <= 0) return 0;
                var e = this.DV % t, n = this.s < 0 ? t - 1 : 0;
                if (this.t > 0) if (0 == e) n = this[0] % t; else for (var r = this.t - 1; r >= 0; --r) n = (e * n + this[r]) % t;
                return n
            }, ee.prototype.millerRabin = function (t) {
                var e = this.subtract(ee.ONE), n = e.getLowestSetBit();
                if (n <= 0) return !1;
                var r = e.shiftRight(n);
                (t = t + 1 >> 1) > Te.length && (t = Te.length);
                for (var i = ne(), s = 0; s < t; ++s) {
                    i.fromInt(Te[Math.floor(Math.random() * Te.length)]);
                    var a = i.modPow(r, this);
                    if (0 != a.compareTo(ee.ONE) && 0 != a.compareTo(e)) {
                        for (var o = 1; o++ < n && 0 != a.compareTo(e);) if (0 == (a = a.modPowInt(2, this)).compareTo(ee.ONE)) return !1;
                        if (0 != a.compareTo(e)) return !1
                    }
                }
                return !0
            }, ee.prototype.clone = function () {
                var t = ne();
                return this.copyTo(t), t
            }, ee.prototype.intValue = function () {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }, ee.prototype.byteValue = function () {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }, ee.prototype.shortValue = function () {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }, ee.prototype.signum = function () {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }, ee.prototype.toByteArray = function () {
                var t = this.t, e = [];
                e[0] = this.s;
                var n, r = this.DB - t * this.DB % 8, i = 0;
                if (t-- > 0) for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); t >= 0;) r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r, n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (i > 0 || n != this.s) && (e[i++] = n);
                return e
            }, ee.prototype.equals = function (t) {
                return 0 == this.compareTo(t)
            }, ee.prototype.min = function (t) {
                return this.compareTo(t) < 0 ? this : t
            }, ee.prototype.max = function (t) {
                return this.compareTo(t) > 0 ? this : t
            }, ee.prototype.and = function (t) {
                var e = ne();
                return this.bitwiseTo(t, de, e), e
            }, ee.prototype.or = function (t) {
                var e = ne();
                return this.bitwiseTo(t, pe, e), e
            }, ee.prototype.xor = function (t) {
                var e = ne();
                return this.bitwiseTo(t, ve, e), e
            }, ee.prototype.andNot = function (t) {
                var e = ne();
                return this.bitwiseTo(t, ye, e), e
            }, ee.prototype.not = function () {
                for (var t = ne(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                return t.t = this.t, t.s = ~this.s, t
            }, ee.prototype.shiftLeft = function (t) {
                var e = ne();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
            }, ee.prototype.shiftRight = function (t) {
                var e = ne();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
            }, ee.prototype.getLowestSetBit = function () {
                for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + ge(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }, ee.prototype.bitCount = function () {
                for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n) t += me(this[n] ^ e);
                return t
            }, ee.prototype.testBit = function (t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }, ee.prototype.setBit = function (t) {
                return this.changeBit(t, pe)
            }, ee.prototype.clearBit = function (t) {
                return this.changeBit(t, ye)
            }, ee.prototype.flipBit = function (t) {
                return this.changeBit(t, ve)
            }, ee.prototype.add = function (t) {
                var e = ne();
                return this.addTo(t, e), e
            }, ee.prototype.subtract = function (t) {
                var e = ne();
                return this.subTo(t, e), e
            }, ee.prototype.multiply = function (t) {
                var e = ne();
                return this.multiplyTo(t, e), e
            }, ee.prototype.divide = function (t) {
                var e = ne();
                return this.divRemTo(t, e, null), e
            }, ee.prototype.remainder = function (t) {
                var e = ne();
                return this.divRemTo(t, null, e), e
            }, ee.prototype.divideAndRemainder = function (t) {
                var e = ne(), n = ne();
                return this.divRemTo(t, e, n), new Array(e, n)
            }, ee.prototype.modPow = function (t, e) {
                var n, r, i = t.bitLength(), s = he(1);
                if (i <= 0) return s;
                n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, r = i < 8 ? new le(e) : e.isEven() ? new ke(e) : new fe(e);
                var a = [], o = 3, u = n - 1, h = (1 << n) - 1;
                if (a[1] = r.convert(this), n > 1) {
                    var c = ne();
                    for (r.sqrTo(a[1], c); o <= h;) a[o] = ne(), r.mulTo(c, a[o - 2], a[o]), o += 2
                }
                var l, f, d = t.t - 1, p = !0, v = ne();
                for (i = ce(t[d]) - 1; d >= 0;) {
                    for (i >= u ? l = t[d] >> i - u & h : (l = (t[d] & (1 << i + 1) - 1) << u - i, d > 0 && (l |= t[d - 1] >> this.DB + i - u)), o = n; 0 == (1 & l);) l >>= 1, --o;
                    if ((i -= o) < 0 && (i += this.DB, --d), p) a[l].copyTo(s), p = !1; else {
                        for (; o > 1;) r.sqrTo(s, v), r.sqrTo(v, s), o -= 2;
                        o > 0 ? r.sqrTo(s, v) : (f = s, s = v, v = f), r.mulTo(v, a[l], s)
                    }
                    for (; d >= 0 && 0 == (t[d] & 1 << i);) r.sqrTo(s, v), f = s, s = v, v = f, --i < 0 && (i = this.DB - 1, --d)
                }
                return r.revert(s)
            }, ee.prototype.modInverse = function (t) {
                var e = t.isEven();
                if (this.isEven() && e || 0 == t.signum()) return ee.ZERO;
                for (var n = t.clone(), r = this.clone(), i = he(1), s = he(0), a = he(0), o = he(1); 0 != n.signum();) {
                    for (; n.isEven();) n.rShiftTo(1, n), e ? (i.isEven() && s.isEven() || (i.addTo(this, i), s.subTo(t, s)), i.rShiftTo(1, i)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                    for (; r.isEven();) r.rShiftTo(1, r), e ? (a.isEven() && o.isEven() || (a.addTo(this, a), o.subTo(t, o)), a.rShiftTo(1, a)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
                    n.compareTo(r) >= 0 ? (n.subTo(r, n), e && i.subTo(a, i), s.subTo(o, s)) : (r.subTo(n, r), e && a.subTo(i, a), o.subTo(s, o))
                }
                return 0 != r.compareTo(ee.ONE) ? ee.ZERO : o.compareTo(t) >= 0 ? o.subtract(t) : o.signum() < 0 ? (o.addTo(t, o), o.signum() < 0 ? o.add(t) : o) : o
            }, ee.prototype.pow = function (t) {
                return this.exp(t, new Se)
            }, ee.prototype.gcd = function (t) {
                var e = this.s < 0 ? this.negate() : this.clone(), n = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(n) < 0) {
                    var r = e;
                    e = n, n = r
                }
                var i = e.getLowestSetBit(), s = n.getLowestSetBit();
                if (s < 0) return e;
                for (i < s && (s = i), s > 0 && (e.rShiftTo(s, e), n.rShiftTo(s, n)); e.signum() > 0;) (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), e.compareTo(n) >= 0 ? (e.subTo(n, e), e.rShiftTo(1, e)) : (n.subTo(e, n), n.rShiftTo(1, n));
                return s > 0 && n.lShiftTo(s, n), n
            }, ee.prototype.isProbablePrime = function (t) {
                var e, n = this.abs();
                if (1 == n.t && n[0] <= Te[Te.length - 1]) {
                    for (e = 0; e < Te.length; ++e) if (n[0] == Te[e]) return !0;
                    return !1
                }
                if (n.isEven()) return !1;
                for (e = 1; e < Te.length;) {
                    for (var r = Te[e], i = e + 1; i < Te.length && r < we;) r *= Te[i++];
                    for (r = n.modInt(r); e < i;) if (r % Te[e++] == 0) return !1
                }
                return n.millerRabin(t)
            }, ee.prototype.square = function () {
                var t = ne();
                return this.squareTo(t), t
            };
            var De = function t() {
                ct()(this, t), this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
            };
            De.prototype.doPublic = function (t) {
                return t.modPowInt(this.e, this.n)
            }, De.prototype.setPublic = function (t, e) {
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = Ee(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
            }, De.prototype.encrypt = function (t) {
                var e = function (t, e) {
                    if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                    for (var n = [], r = t.length - 1; r >= 0 && e > 0;) {
                        var i = t.charCodeAt(r--);
                        i < 128 ? n[--e] = i : i > 127 && i < 2048 ? (n[--e] = 63 & i | 128, n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128, n[--e] = i >> 6 & 63 | 128, n[--e] = i >> 12 | 224)
                    }
                    n[--e] = 0;
                    for (var s = new te, a = []; e > 2;) {
                        for (a[0] = 0; 0 == a[0];) s.nextBytes(a);
                        n[--e] = a[0]
                    }
                    return n[--e] = 2, n[--e] = 0, new ee(n)
                }(t, this.n.bitLength() + 7 >> 3);
                if (null == e) return null;
                var n = this.doPublic(e);
                if (null == n) return null;
                var r = n.toString(16);
                return 0 == (1 & r.length) ? r : "0" + r
            }, De.prototype.doPrivate = function (t) {
                if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;) e = e.add(this.p);
                return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
            }, De.prototype.setPrivate = function (t, e, n) {
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = Ee(t, 16), this.e = parseInt(e, 16), this.d = Ee(n, 16)) : console.error("Invalid RSA private key")
            }, De.prototype.setPrivateEx = function (t, e, n, r, i, s, a, o) {
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = Ee(t, 16), this.e = parseInt(e, 16), this.d = Ee(n, 16), this.p = Ee(r, 16), this.q = Ee(i, 16), this.dmp1 = Ee(s, 16), this.dmq1 = Ee(a, 16), this.coeff = Ee(o, 16)) : console.error("Invalid RSA private key")
            }, De.prototype.generate = function (t, e) {
                var n = new te, r = t >> 1;
                this.e = parseInt(e, 16);
                for (var i = new ee(e, 16); ;) {
                    for (; this.p = new ee(t - r, 1, n), 0 != this.p.subtract(ee.ONE).gcd(i).compareTo(ee.ONE) || !this.p.isProbablePrime(10);) ;
                    for (; this.q = new ee(r, 1, n), 0 != this.q.subtract(ee.ONE).gcd(i).compareTo(ee.ONE) || !this.q.isProbablePrime(10);) ;
                    if (this.p.compareTo(this.q) <= 0) {
                        var s = this.p;
                        this.p = this.q, this.q = s
                    }
                    var a = this.p.subtract(ee.ONE), o = this.q.subtract(ee.ONE), u = a.multiply(o);
                    if (0 == u.gcd(i).compareTo(ee.ONE)) {
                        this.n = this.p.multiply(this.q), this.d = i.modInverse(u), this.dmp1 = this.d.mod(a), this.dmq1 = this.d.mod(o), this.coeff = this.q.modInverse(this.p);
                        break
                    }
                }
            }, De.prototype.decrypt = function (t) {
                var e = Ee(t, 16), n = this.doPrivate(e);
                return null == n ? null : function (t, e) {
                    for (var n = t.toByteArray(), r = 0; r < n.length && 0 == n[r];) ++r;
                    if (n.length - r != e - 1 || 2 != n[r]) return null;
                    for (++r; 0 != n[r];) if (++r >= n.length) return null;
                    for (var i = ""; ++r < n.length;) {
                        var s = 255 & n[r];
                        s < 128 ? i += String.fromCharCode(s) : s > 191 && s < 224 ? (i += String.fromCharCode((31 & s) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & s) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2)
                    }
                    return i
                }(n, this.n.bitLength() + 7 >> 3)
            };
            var xe = {}, Ae = void 0;
            xe.decode = function (t) {
                var e;
                if (void 0 === Ae) {
                    var n = "= \f\n\r\t \u2028\u2029";
                    for (Ae = [], e = 0; e < 64; ++e) Ae["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                    for (e = 0; e < n.length; ++e) Ae[n.charAt(e)] = -1
                }
                var r = [], i = 0, s = 0;
                for (e = 0; e < t.length; ++e) {
                    var a = t.charAt(e);
                    if ("=" == a) break;
                    if (-1 != (a = Ae[a])) {
                        if (void 0 === a) throw"Illegal character at offset " + e;
                        i |= a, ++s >= 4 ? (r[r.length] = i >> 16, r[r.length] = i >> 8 & 255, r[r.length] = 255 & i, i = 0, s = 0) : i <<= 6
                    }
                }
                switch (s) {
                    case 1:
                        throw"Base64 encoding incomplete: at least 2 bits missing";
                    case 2:
                        r[r.length] = i >> 10;
                        break;
                    case 3:
                        r[r.length] = i >> 16, r[r.length] = i >> 8 & 255
                }
                return r
            }, xe.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/, xe.unarmor = function (t) {
                var e = xe.re.exec(t);
                if (e) if (e[1]) t = e[1]; else {
                    if (!e[2]) throw"RegExp out of sync";
                    t = e[2]
                }
                return xe.decode(t)
            };
            var _e = {}, Be = void 0;
            _e.decode = function (t) {
                var e;
                if (void 0 === Be) {
                    var n = "0123456789ABCDEF", r = " \f\n\r\t \u2028\u2029";
                    for (Be = [], e = 0; e < 16; ++e) Be[n.charAt(e)] = e;
                    for (n = n.toLowerCase(), e = 10; e < 16; ++e) Be[n.charAt(e)] = e;
                    for (e = 0; e < r.length; ++e) Be[r.charAt(e)] = -1
                }
                var i = [], s = 0, a = 0;
                for (e = 0; e < t.length; ++e) {
                    var o = t.charAt(e);
                    if ("=" == o) break;
                    if (-1 != (o = Be[o])) {
                        if (void 0 === o) throw"Illegal character at offset " + e;
                        s |= o, ++a >= 2 ? (i[i.length] = s, s = 0, a = 0) : s <<= 4
                    }
                }
                if (a) throw"Hex encoding incomplete: 4 bits missing";
                return i
            };
            /*! asn1-1.0.2.js (c) 2013 Kenji Urushima | kjur.github.com/jsrsasign/license
     */
            var Re = {};
            Re.env = Re.env || {};
            var Pe = Re, Ce = Object.prototype, Ie = ["toString", "valueOf"];
            Re.env.parseUA = function (t) {
                var e, n = function (t) {
                    var e = 0;
                    return parseFloat(t.replace(/\./g, function () {
                        return 1 == e++ ? "" : "."
                    }))
                }, r = navigator, i = {
                    ie: 0,
                    opera: 0,
                    gecko: 0,
                    webkit: 0,
                    chrome: 0,
                    mobile: null,
                    air: 0,
                    ipad: 0,
                    iphone: 0,
                    ipod: 0,
                    ios: null,
                    android: 0,
                    webos: 0,
                    caja: r && r.cajaVersion,
                    secure: !1,
                    os: null
                }, s = t || navigator && navigator.userAgent, a = window && window.location, o = a && a.href;
                return i.secure = o && 0 === o.toLowerCase().indexOf("https"), s && (/windows|win32/i.test(s) ? i.os = "windows" : /macintosh/i.test(s) ? i.os = "macintosh" : /rhino/i.test(s) && (i.os = "rhino"), /KHTML/.test(s) && (i.webkit = 1), (e = s.match(/AppleWebKit\/([^\s]*)/)) && e[1] && (i.webkit = n(e[1]), / Mobile\//.test(s) ? (i.mobile = "Apple", (e = s.match(/OS ([^\s]*)/)) && e[1] && (e = n(e[1].replace("_", "."))), i.ios = e, i.ipad = i.ipod = i.iphone = 0, (e = s.match(/iPad|iPod|iPhone/)) && e[0] && (i[e[0].toLowerCase()] = i.ios)) : ((e = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (i.mobile = e[0]), /webOS/.test(s) && (i.mobile = "WebOS", (e = s.match(/webOS\/([^\s]*);/)) && e[1] && (i.webos = n(e[1]))), / Android/.test(s) && (i.mobile = "Android", (e = s.match(/Android ([^\s]*);/)) && e[1] && (i.android = n(e[1])))), (e = s.match(/Chrome\/([^\s]*)/)) && e[1] ? i.chrome = n(e[1]) : (e = s.match(/AdobeAIR\/([^\s]*)/)) && (i.air = e[0])), i.webkit || ((e = s.match(/Opera[\s\/]([^\s]*)/)) && e[1] ? (i.opera = n(e[1]), (e = s.match(/Version\/([^\s]*)/)) && e[1] && (i.opera = n(e[1])), (e = s.match(/Opera Mini[^;]*/)) && (i.mobile = e[0])) : (e = s.match(/MSIE\s([^;]*)/)) && e[1] ? i.ie = n(e[1]) : (e = s.match(/Gecko\/([^\s]*)/)) && (i.gecko = 1, (e = s.match(/rv:([^\s\)]*)/)) && e[1] && (i.gecko = n(e[1]))))), i
            }, Re.env.ua = Re.env.parseUA(), Re.isFunction = function (t) {
                return "function" == typeof t || "[object Function]" === Ce.toString.apply(t)
            }, Re._IEEnumFix = Re.env.ua.ie ? function (t, e) {
                var n, r, i;
                for (n = 0; n < Ie.length; n += 1) i = e[r = Ie[n]], Pe.isFunction(i) && i != Ce[r] && (t[r] = i)
            } : function () {
            }, Re.extend = function (t, e, n) {
                if (!e || !t) throw new Error("extend failed, please check that all dependencies are included.");
                var r, i = function () {
                };
                if (i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Ce.constructor && (e.prototype.constructor = e), n) {
                    for (r in n) Pe.hasOwnProperty(n, r) && (t.prototype[r] = n[r]);
                    Pe._IEEnumFix(t.prototype, n)
                }
            };
            /**
             * @fileOverview
             * @name asn1-1.0.js
             * @author Kenji Urushima kenji.urushima@gmail.com
             * @version 1.0.2 (2013-May-30)
             * @since 2.1
             * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
             */
            var Oe = {};
            void 0 !== Oe.asn1 && Oe.asn1 || (Oe.asn1 = {}), Oe.asn1.ASN1Util = new function () {
                this.integerToByteHex = function (t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e
                }, this.bigIntToMinTwosComplementsHex = function (t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
                        var n = e.substr(1).length;
                        n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
                        for (var r = "", i = 0; i < n; i++) r += "f";
                        e = new ee(r, 16).xor(t).add(ee.ONE).toString(16).replace(/^-/, "")
                    }
                    return e
                }, this.getPEMStringFromHex = function (t, e) {
                    var n = CryptoJS.enc.Hex.parse(t),
                        r = CryptoJS.enc.Base64.stringify(n).replace(/(.{64})/g, "$1\r\n");
                    return "-----BEGIN " + e + "-----\r\n" + (r = r.replace(/\r\n$/, "")) + "\r\n-----END " + e + "-----\r\n"
                }
            }, Oe.asn1.ASN1Object = function () {
                this.getLengthHexFromValue = function () {
                    if (void 0 === this.hV || null == this.hV) throw"this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw"value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var t = this.hV.length / 2, e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                    var n = e.length / 2;
                    if (n > 15) throw"ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    return (128 + n).toString(16) + e
                }, this.getEncodedHex = function () {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                }, this.getValueHex = function () {
                    return this.getEncodedHex(), this.hV
                }, this.getFreshValueHex = function () {
                    return ""
                }
            }, Oe.asn1.DERAbstractString = function (t) {
                Oe.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function () {
                    return this.s
                }, this.setString = function (t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
                }, this.setStringHex = function (t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.getFreshValueHex = function () {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
            }, Re.extend(Oe.asn1.DERAbstractString, Oe.asn1.ASN1Object), Oe.asn1.DERAbstractTime = function (t) {
                Oe.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function (t) {
                    return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc)
                }, this.formatDate = function (t, e) {
                    var n = this.zeroPadding, r = this.localDateToUTC(t), i = String(r.getFullYear());
                    return "utc" == e && (i = i.substr(2, 2)), i + n(String(r.getMonth() + 1), 2) + n(String(r.getDate()), 2) + n(String(r.getHours()), 2) + n(String(r.getMinutes()), 2) + n(String(r.getSeconds()), 2) + "Z"
                }, this.zeroPadding = function (t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }, this.getString = function () {
                    return this.s
                }, this.setString = function (t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
                }, this.setByDateValue = function (t, e, n, r, i, s) {
                    var a = new Date(Date.UTC(t, e - 1, n, r, i, s, 0));
                    this.setByDate(a)
                }, this.getFreshValueHex = function () {
                    return this.hV
                }
            }, Re.extend(Oe.asn1.DERAbstractTime, Oe.asn1.ASN1Object), Oe.asn1.DERAbstractStructured = function (t) {
                Oe.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function (t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t
                }, this.appendASN1Object = function (t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
                }, this.asn1Array = new Array, void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
            }, Re.extend(Oe.asn1.DERAbstractStructured, Oe.asn1.ASN1Object), Oe.asn1.DERBoolean = function () {
                Oe.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
            }, Re.extend(Oe.asn1.DERBoolean, Oe.asn1.ASN1Object), Oe.asn1.DERInteger = function (t) {
                Oe.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function (t) {
                    this.hTLV = null, this.isModified = !0, this.hV = Oe.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function (t) {
                    var e = new ee(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function (t) {
                    this.hV = t
                }, this.getFreshValueHex = function () {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, Re.extend(Oe.asn1.DERInteger, Oe.asn1.ASN1Object), Oe.asn1.DERBitString = function (t) {
                Oe.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function (t) {
                    this.hTLV = null, this.isModified = !0, this.hV = t
                }, this.setUnusedBitsAndHexValue = function (t, e) {
                    if (t < 0 || 7 < t) throw"unused bits shall be from 0 to 7: u = " + t;
                    var n = "0" + t;
                    this.hTLV = null, this.isModified = !0, this.hV = n + e
                }, this.setByBinaryString = function (t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var n = 0; n <= e; n++) t += "0";
                    var r = "";
                    for (n = 0; n < t.length - 1; n += 8) {
                        var i = t.substr(n, 8), s = parseInt(i, 2).toString(16);
                        1 == s.length && (s = "0" + s), r += s
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
                }, this.setByBooleanArray = function (t) {
                    for (var e = "", n = 0; n < t.length; n++) 1 == t[n] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }, this.newFalseArray = function (t) {
                    for (var e = new Array(t), n = 0; n < t; n++) e[n] = !1;
                    return e
                }, this.getFreshValueHex = function () {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
            }, Re.extend(Oe.asn1.DERBitString, Oe.asn1.ASN1Object), Oe.asn1.DEROctetString = function (t) {
                Oe.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
            }, Re.extend(Oe.asn1.DEROctetString, Oe.asn1.DERAbstractString), Oe.asn1.DERNull = function () {
                Oe.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
            }, Re.extend(Oe.asn1.DERNull, Oe.asn1.ASN1Object), Oe.asn1.DERObjectIdentifier = function (t) {
                var e = function (t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e
                }, n = function (t) {
                    var n = "", r = new ee(t, 10).toString(2), i = 7 - r.length % 7;
                    7 == i && (i = 0);
                    for (var s = "", a = 0; a < i; a++) s += "0";
                    r = s + r;
                    for (a = 0; a < r.length - 1; a += 7) {
                        var o = r.substr(a, 7);
                        a != r.length - 7 && (o = "1" + o), n += e(parseInt(o, 2))
                    }
                    return n
                };
                Oe.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function (t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.setValueOidString = function (t) {
                    if (!t.match(/^[0-9.]+$/)) throw"malformed oid string: " + t;
                    var r = "", i = t.split("."), s = 40 * parseInt(i[0]) + parseInt(i[1]);
                    r += e(s), i.splice(0, 2);
                    for (var a = 0; a < i.length; a++) r += n(i[a]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r
                }, this.setValueName = function (t) {
                    if (void 0 === Oe.asn1.x509.OID.name2oidList[t]) throw"DERObjectIdentifier oidName undefined: " + t;
                    var e = Oe.asn1.x509.OID.name2oidList[t];
                    this.setValueOidString(e)
                }, this.getFreshValueHex = function () {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
            }, Re.extend(Oe.asn1.DERObjectIdentifier, Oe.asn1.ASN1Object), Oe.asn1.DERUTF8String = function (t) {
                Oe.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
            }, Re.extend(Oe.asn1.DERUTF8String, Oe.asn1.DERAbstractString), Oe.asn1.DERNumericString = function (t) {
                Oe.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
            }, Re.extend(Oe.asn1.DERNumericString, Oe.asn1.DERAbstractString), Oe.asn1.DERPrintableString = function (t) {
                Oe.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
            }, Re.extend(Oe.asn1.DERPrintableString, Oe.asn1.DERAbstractString), Oe.asn1.DERTeletexString = function (t) {
                Oe.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
            }, Re.extend(Oe.asn1.DERTeletexString, Oe.asn1.DERAbstractString), Oe.asn1.DERIA5String = function (t) {
                Oe.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
            }, Re.extend(Oe.asn1.DERIA5String, Oe.asn1.DERAbstractString), Oe.asn1.DERUTCTime = function (t) {
                Oe.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function (t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }, Re.extend(Oe.asn1.DERUTCTime, Oe.asn1.DERAbstractTime), Oe.asn1.DERGeneralizedTime = function (t) {
                Oe.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.setByDate = function (t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen"), this.hV = stohex(this.s)
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }, Re.extend(Oe.asn1.DERGeneralizedTime, Oe.asn1.DERAbstractTime), Oe.asn1.DERSequence = function (t) {
                Oe.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function () {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        t += this.asn1Array[e].getEncodedHex()
                    }
                    return this.hV = t, this.hV
                }
            }, Re.extend(Oe.asn1.DERSequence, Oe.asn1.DERAbstractStructured), Oe.asn1.DERSet = function (t) {
                Oe.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.getFreshValueHex = function () {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var n = this.asn1Array[e];
                        t.push(n.getEncodedHex())
                    }
                    return t.sort(), this.hV = t.join(""), this.hV
                }
            }, Re.extend(Oe.asn1.DERSet, Oe.asn1.DERAbstractStructured), Oe.asn1.DERTaggedObject = function (t) {
                Oe.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function (t, e, n) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = n, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                }, this.getFreshValueHex = function () {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
            }, Re.extend(Oe.asn1.DERTaggedObject, Oe.asn1.ASN1Object);
            var Le = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ne = "=";

            function Me(t) {
                var e, n, r = "";
                for (e = 0; e + 3 <= t.length; e += 3) n = parseInt(t.substring(e, e + 3), 16), r += Le.charAt(n >> 6) + Le.charAt(63 & n);
                for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), r += Le.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), r += Le.charAt(n >> 2) + Le.charAt((3 & n) << 4)); (3 & r.length) > 0;) r += Ne;
                return r
            }

            jt.prototype.getHexStringValue = function () {
                var t = this.toHexString(), e = 2 * this.header, n = 2 * this.length;
                return t.substr(e, n)
            }, De.prototype.parseKey = function (t) {
                try {
                    var e = 0, n = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? _e.decode(t) : xe.unarmor(t),
                        i = jt.decode(r);
                    if (3 === i.sub.length && (i = i.sub[2].sub[0]), 9 === i.sub.length) {
                        e = i.sub[1].getHexStringValue(), this.n = Ee(e, 16), n = i.sub[2].getHexStringValue(), this.e = parseInt(n, 16);
                        var s = i.sub[3].getHexStringValue();
                        this.d = Ee(s, 16);
                        var a = i.sub[4].getHexStringValue();
                        this.p = Ee(a, 16);
                        var o = i.sub[5].getHexStringValue();
                        this.q = Ee(o, 16);
                        var u = i.sub[6].getHexStringValue();
                        this.dmp1 = Ee(u, 16);
                        var h = i.sub[7].getHexStringValue();
                        this.dmq1 = Ee(h, 16);
                        var c = i.sub[8].getHexStringValue();
                        this.coeff = Ee(c, 16)
                    } else {
                        if (2 !== i.sub.length) return !1;
                        var l = i.sub[1].sub[0];
                        e = l.sub[0].getHexStringValue(), this.n = Ee(e, 16), n = l.sub[1].getHexStringValue(), this.e = parseInt(n, 16)
                    }
                    return !0
                } catch (t) {
                    return !1
                }
            }, De.prototype.getPrivateBaseKey = function () {
                var t = {array: [new Oe.asn1.DERInteger({int: 0}), new Oe.asn1.DERInteger({bigint: this.n}), new Oe.asn1.DERInteger({int: this.e}), new Oe.asn1.DERInteger({bigint: this.d}), new Oe.asn1.DERInteger({bigint: this.p}), new Oe.asn1.DERInteger({bigint: this.q}), new Oe.asn1.DERInteger({bigint: this.dmp1}), new Oe.asn1.DERInteger({bigint: this.dmq1}), new Oe.asn1.DERInteger({bigint: this.coeff})]};
                return new Oe.asn1.DERSequence(t).getEncodedHex()
            }, De.prototype.getPrivateBaseKeyB64 = function () {
                return Me(this.getPrivateBaseKey())
            }, De.prototype.getPublicBaseKey = function () {
                var t = {array: [new Oe.asn1.DERObjectIdentifier({oid: "1.2.840.113549.1.1.1"}), new Oe.asn1.DERNull]},
                    e = new Oe.asn1.DERSequence(t);
                return t = {array: [new Oe.asn1.DERInteger({bigint: this.n}), new Oe.asn1.DERInteger({int: this.e})]}, t = {hex: "00" + new Oe.asn1.DERSequence(t).getEncodedHex()}, t = {array: [e, new Oe.asn1.DERBitString(t)]}, new Oe.asn1.DERSequence(t).getEncodedHex()
            }, De.prototype.getPublicBaseKeyB64 = function () {
                return Me(this.getPublicBaseKey())
            }, De.prototype.wordwrap = function (t, e) {
                if (e = e || 64, !t) return t;
                var n = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                return t.match(RegExp(n, "g")).join("\n")
            }, De.prototype.getPrivateKey = function () {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----"
            }, De.prototype.getPublicKey = function () {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----"
            }, De.prototype.hasPublicKeyProperty = function (t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
            }, De.prototype.hasPrivateKeyProperty = function (t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
            }, De.prototype.parsePropertiesFrom = function (t) {
                this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
            };
            var Ue = function (t) {
                function e(t) {
                    ct()(this, e);
                    var n = K()(this, (e.__proto__ || G()(e)).call(this));
                    return t && ("string" == typeof t ? n.parseKey(t) : (n.hasPrivateKeyProperty(t) || n.hasPublicKeyProperty(t)) && n.parsePropertiesFrom(t)), n
                }

                return Y()(e, t), e
            }(De), Ve = function t(e) {
                ct()(this, t), e = e || {}, this.default_key_size = parseInt(e.default_key_size) || 1024, this.default_public_exponent = e.default_public_exponent || "010001", this.log = e.log || !1, this.key = null
            };
            Ve.prototype.setKey = function (t) {
                this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new Ue(t)
            }, Ve.prototype.setPrivateKey = function (t) {
                this.setKey(t)
            }, Ve.prototype.setPublicKey = function (t) {
                this.setKey(t)
            }, Ve.prototype.decrypt = function (t) {
                try {
                    return this.getKey().decrypt(function (t) {
                        var e, n, r = "", i = 0;
                        for (e = 0; e < t.length && t.charAt(e) != Ne; ++e) {
                            var s = Le.indexOf(t.charAt(e));
                            s < 0 || (0 == i ? (r += oe(s >> 2), n = 3 & s, i = 1) : 1 == i ? (r += oe(n << 2 | s >> 4), n = 15 & s, i = 2) : 2 == i ? (r += oe(n), r += oe(s >> 2), n = 3 & s, i = 3) : (r += oe(n << 2 | s >> 4), r += oe(15 & s), i = 0))
                        }
                        return 1 == i && (r += oe(n << 2)), r
                    }(t))
                } catch (t) {
                    return !1
                }
            }, Ve.prototype.encrypt = function (t) {
                try {
                    return Me(this.getKey().encrypt(t))
                } catch (t) {
                    return !1
                }
            }, Ve.prototype.getKey = function (t) {
                if (!this.key) {
                    if (this.key = new Ue, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }, Ve.prototype.getPrivateKey = function () {
                return this.getKey().getPrivateKey()
            }, Ve.prototype.getPrivateKeyB64 = function () {
                return this.getKey().getPrivateBaseKeyB64()
            }, Ve.prototype.getPublicKey = function () {
                return this.getKey().getPublicKey()
            }, Ve.prototype.getPublicKeyB64 = function () {
                return this.getKey().getPublicBaseKeyB64()
            };
            var qe = function () {
                    function t(e, n) {
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        ct()(this, t), this.stream_type = n, this.endpoint = e, this.eventSource = new d, this.dataQueue = []
                    }

                    return ft()(t, [{
                        key: "destroy", value: function () {
                            this.eventSource.destroy()
                        }
                    }, {
                        key: "connect", value: function () {
                        }
                    }, {
                        key: "disconnect", value: function () {
                        }
                    }, {
                        key: "reconnect", value: function () {
                            var t = this;
                            return this.disconnect().then(function () {
                                return t.connect()
                            })
                        }
                    }, {
                        key: "setEndpoint", value: function (t) {
                            return this.endpoint = t, this.reconnect()
                        }
                    }, {
                        key: "send", value: function (t) {
                        }
                    }, {
                        key: "prepare", value: function (t) {
                        }
                    }], [{
                        key: "canTransfer", value: function (e) {
                            return t.streamTypes().includes(e)
                        }
                    }, {
                        key: "streamTypes", value: function () {
                            return []
                        }
                    }]), t
                }(), Fe = (/^((?!chrome|android).)*safari/i.test(navigator.userAgent), o("transport:ws")),
                He = function (t) {
                    function e(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            socket: location.protocol.replace("http", "ws") + "//localhost/ws/",
                            workers: 1
                        };
                        ct()(this, e);
                        var i = K()(this, (e.__proto__ || G()(e)).call(this, t, n));
                        return i.proxies = [], i.currentProxy = 0, i.workers = 1, i.socket_url = r.socket, i.ready = i.connect(), i
                    }

                    return Y()(e, t), ft()(e, [{
                        key: "destroy", value: function () {
                            var t = this;
                            return this.disconnect().then(function () {
                                return Z()(e.prototype.__proto__ || G()(e.prototype), "destroy", t).call(t)
                            })
                        }
                    }, {
                        key: "connect", value: function () {
                            var t = this;
                            return this.disconnect().then(function () {
                                for (var e = [], n = 0; n < t.workers; ++n) {
                                    var r = new Ge(t.socket_url, t.endpoint, t.stream_type);
                                    r.set_disconnect_handler(function (e) {
                                        t.eventSource.dispatchEvent("disconnected", {
                                            code: e.code,
                                            reason: e.reason
                                        }), [1e3, 1006, 1013, 1011].includes(e.code) && setTimeout(function () {
                                            t.ready && t.ready.reject && t.ready.reject(), t.ready = t.connect()
                                        }, 3e3)
                                    }), r.set_data_handler(function (e) {
                                        t.dataQueue.push(new Uint8Array(e)), t.eventSource.dispatchEvent("data")
                                    }), e.push(r.connect().then(function () {
                                        t.eventSource.dispatchEvent("connected")
                                    }).catch(function (e) {
                                        throw t.eventSource.dispatchEvent("error"), new Error(e)
                                    })), t.proxies.push(r)
                                }
                                return J.a.all(e)
                            })
                        }
                    }, {
                        key: "disconnect", value: function () {
                            for (var t = [], e = 0; e < this.proxies.length; ++e) t.push(this.proxies[e].close());
                            return this.proxies = [], this.proxies.length ? J.a.all(t) : J.a.resolve()
                        }
                    }, {
                        key: "socket", value: function () {
                            return this.proxies[this.currentProxy++ % this.proxies.length]
                        }
                    }, {
                        key: "send", value: function (t, e) {
                            var n = this.socket().send(t);
                            return e && e(n.seq), n.promise
                        }
                    }], [{
                        key: "canTransfer", value: function (t) {
                            return e.streamTypes().includes(t)
                        }
                    }, {
                        key: "streamTypes", value: function () {
                            return ["hls", "rtsp"]
                        }
                    }]), e
                }(qe), je = function () {
                    function t(e) {
                        ct()(this, t), this.ver = e
                    }

                    return ft()(t, null, [{
                        key: "PROTO", get: function () {
                            return "WSP"
                        }
                    }, {
                        key: "V1_1", get: function () {
                            return "1.1"
                        }
                    }, {
                        key: "CMD_INIT", get: function () {
                            return "INIT"
                        }
                    }, {
                        key: "CMD_JOIN", get: function () {
                            return "JOIN"
                        }
                    }, {
                        key: "CMD_WRAP", get: function () {
                            return "WRAP"
                        }
                    }]), ft()(t, [{
                        key: "build", value: function (e, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", i = "";
                            for (var s in n.seq || (n.seq = ++t.seq), n) i += s + ": " + n[s] + "\r\n";
                            return t.PROTO + "/" + this.ver + " " + e + "\r\n" + i + "\r\n" + r
                        }
                    }], [{
                        key: "parse", value: function (e) {
                            var n = e.indexOf("\r\n\r\n"), r = e.substr(0, n).split("\r\n"),
                                i = r.shift().match(new RegExp(t.PROTO + "/" + t.V1_1 + "\\s+(\\d+)\\s+(.+)"));
                            if (i) {
                                for (var s = {code: Number(i[1]), msg: i[2], data: {}, payload: ""}; r.length;) {
                                    var a = r.shift();
                                    if (!a) break;
                                    var o = a.split(":"), u = C()(o, 2), h = u[0], c = u[1];
                                    s.data[h.trim()] = c.trim()
                                }
                                return s.payload = e.substr(n + 4), s
                            }
                            return null
                        }
                    }]), t
                }();
            je.seq = 0;
            var Ge = function () {
                function t(e, n, r) {
                    ct()(this, t), this.url = e, this.stream_type = r, this.endpoint = n, this.data_handler = function () {
                    }, this.disconnect_handler = function () {
                    }, this.builder = new je(je.V1_1), this.awaitingPromises = {}, this.seq = 0, this.encryptor = new Ve
                }

                return ft()(t, null, [{
                    key: "CHN_CONTROL", get: function () {
                        return "control"
                    }
                }, {
                    key: "CHN_DATA", get: function () {
                        return "data"
                    }
                }]), ft()(t, [{
                    key: "set_data_handler", value: function (t) {
                        this.data_handler = t
                    }
                }, {
                    key: "set_disconnect_handler", value: function (t) {
                        this.disconnect_handler = t
                    }
                }, {
                    key: "close", value: function () {
                        var t = this;
                        return Fe.log("closing connection"), new J.a(function (e) {
                            t.ctrlChannel.onclose = function () {
                                t.dataChannel ? (t.dataChannel.onclose = function () {
                                    Fe.log("closed"), e()
                                }, t.dataChannel.close()) : (Fe.log("closed"), e())
                            }, t.ctrlChannel.close()
                        })
                    }
                }, {
                    key: "onDisconnect", value: function () {
                        this.ctrlChannel.onclose = null, this.ctrlChannel.close(), this.dataChannel && (this.dataChannel.onclose = null, this.dataChannel.close()), this.disconnect_handler(this)
                    }
                }, {
                    key: "initDataChannel", value: function (e) {
                        var n = this;
                        return new J.a(function (r, i) {
                            n.dataChannel = new WebSocket(n.url, t.CHN_DATA), n.dataChannel.binaryType = "arraybuffer", n.dataChannel.onopen = function () {
                                var t = n.builder.build(je.CMD_JOIN, {channel: e});
                                Fe.debug(t), n.dataChannel.send(t)
                            }, n.dataChannel.onmessage = function (t) {
                                if (Fe.debug("[data]\r\n" + t.data), !je.parse(t.data)) return i();
                                n.dataChannel.onmessage = function (t) {
                                    n.data_handler && n.data_handler(t.data)
                                }, r()
                            }, n.dataChannel.onerror = function (t) {
                                Fe.error("[data] " + t.type), n.dataChannel.close()
                            }, n.dataChannel.onclose = function (t) {
                                Fe.error("[data] " + t.type + ". code: " + t.code + ", reason: " + (t.reason || "unknown reason")), n.onDisconnect(t)
                            }
                        })
                    }
                }, {
                    key: "connect", value: function () {
                        var e = this;
                        return this.encryptionKey = null, new J.a(function (n, r) {
                            e.ctrlChannel = new WebSocket(e.url, t.CHN_CONTROL), e.connected = !1, e.ctrlChannel.onopen = function () {
                                var t = {proto: e.stream_type};
                                e.endpoint.socket ? t.socket = e.endpoint.socket : O()(t, {
                                    host: e.endpoint.host,
                                    port: e.endpoint.port
                                });
                                var n = e.builder.build(je.CMD_INIT, t);
                                Fe.debug(n), e.ctrlChannel.send(n)
                            }, e.ctrlChannel.onmessage = function (t) {
                                Fe.debug("[ctrl]\r\n" + t.data);
                                var i = je.parse(t.data);
                                return i ? i.code >= 300 ? (Fe.error("[ctrl]\r\n" + i.code + ": " + i.msg), r()) : (e.ctrlChannel.onmessage = function (t) {
                                    var n = je.parse(t.data);
                                    Fe.debug("[ctrl]\r\n" + t.data), n.data.seq in e.awaitingPromises && (n.code < 300 ? e.awaitingPromises[n.data.seq].resolve(n) : e.awaitingPromises[n.data.seq].reject(n), delete e.awaitingPromises[n.data.seq])
                                }, e.encryptionKey = i.data.pubkey || null, e.encryptionKey && e.encryptor.setPublicKey(e.encryptionKey), void e.initDataChannel(i.data.channel).then(n).catch(r)) : r()
                            }, e.ctrlChannel.onerror = function (t) {
                                Fe.error("[ctrl] " + t.type), e.ctrlChannel.close()
                            }, e.ctrlChannel.onclose = function (t) {
                                Fe.error("[ctrl] " + t.type + ". code: " + t.code + " " + (t.reason || "unknown reason")), e.onDisconnect(t)
                            }
                        })
                    }
                }, {
                    key: "encrypt", value: function (t) {
                        if (this.encryptionKey) {
                            var e = this.encryptor.encrypt(t);
                            if (!1 === e) throw new Error("Encryption failed. Stopping");
                            return e
                        }
                        return t
                    }
                }, {
                    key: "send", value: function (t) {
                        var e = this;
                        if (this.ctrlChannel.readyState != WebSocket.OPEN) throw this.close(), new Error("disconnected");
                        var n = {contentLength: t.length, seq: ++je.seq};
                        return {
                            seq: n.seq, promise: new J.a(function (r, i) {
                                e.awaitingPromises[n.seq] = {resolve: r, reject: i};
                                var s = e.builder.build(je.CMD_WRAP, n, t);
                                Fe.debug(s), e.ctrlChannel.send(e.encrypt(s))
                            })
                        }
                    }
                }]), t
            }(), ze = o("wsp"), Ke = function () {
                function t() {
                    ct()(this, t)
                }

                return ft()(t, null, [{
                    key: "isSupported", value: function (e) {
                        return [t.HLS, t.RTSP].includes(e)
                    }
                }, {
                    key: "fromUrl", value: function (e) {
                        var n = void 0;
                        try {
                            n = h.parse(e)
                        } catch (t) {
                            return null
                        }
                        switch (n.protocol) {
                            case"rtsp":
                                return t.RTSP;
                            case"http":
                            case"https":
                                return e.indexOf(".m3u8") >= 0 ? t.HLS : null;
                            default:
                                return null
                        }
                    }
                }, {
                    key: "fromMime", value: function (e) {
                        switch (e) {
                            case"application/x-rtsp":
                                return t.RTSP;
                            case"application/vnd.apple.mpegurl":
                            case"application/x-mpegurl":
                                return t.HLS;
                            default:
                                return null
                        }
                    }
                }, {
                    key: "HLS", get: function () {
                        return "hls"
                    }
                }, {
                    key: "RTSP", get: function () {
                        return "rtsp"
                    }
                }]), t
            }(), We = function () {
                function t(e, n) {
                    var r = this;
                    ct()(this, t), (void 0 === e ? "undefined" : _()(e)) == _()("") ? this.player = document.getElementById(e) : this.player = e;
                    var i = n.modules || {client: Nt, transport: {constructor: He}};
                    this.errorHandler = n.errorHandler || null, this.queryCredentials = n.queryCredentials || null, this.modules = {};
                    var s = !0, a = !1, o = void 0;
                    try {
                        for (var u, h = nt()(i); !(s = (u = h.next()).done); s = !0) {
                            var c = u.value, l = c.transport || He, f = c.client || Nt;
                            l.constructor.canTransfer(f.streamType()) ? this.modules[f.streamType()] = {
                                client: f,
                                transport: l
                            } : ze.warn("Client stream type " + f.streamType() + " is incompatible with transport types [" + l.streamTypes().join(", ") + "]. Skip")
                        }
                    } catch (t) {
                        a = !0, o = t
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    if (this.type = Ke.RTSP, this.url = null, n.url && n.type) this.url = n.url, this.type = n.type; else if (!this._checkSource(this.player)) for (var d = 0; d < this.player.children.length && !this._checkSource(this.player.children[d]); ++d) ;
                    this.url && this.setSource(this.url, this.type), this.player.addEventListener("play", function () {
                        r.isPlaying() || r.client.start()
                    }, !1), this.player.addEventListener("pause", function () {
                        r.client.stop()
                    }, !1)
                }

                return ft()(t, [{
                    key: "isPlaying", value: function () {
                        return !(this.player.paused || this.client.paused)
                    }
                }, {
                    key: "canPlayUrl", value: function (t) {
                        return Ke.fromUrl(t) in this.modules
                    }
                }, {
                    key: "_checkSource", value: function (t) {
                        return !(t.dataset.ignore || !t.src || this.player.canPlayType(t.type) || !Ke.fromMime(t.type) && !Ke.fromUrl(t.src)) && (this.url = t.src, this.type = t.type ? Ke.fromMime(t.type) : Ke.fromUrl(t.src), !0)
                    }
                }, {
                    key: "setSource", value: function () {
                        var t = q()(U.a.mark(function t(e, n) {
                            var r, i, s;
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.transport) {
                                            t.next = 6;
                                            break
                                        }
                                        if (!this.client) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4, this.client.detachTransport();
                                    case 4:
                                        return t.next = 6, this.transport.destroy();
                                    case 6:
                                        t.prev = 6, this.endpoint = h.parse(e), t.next = 13;
                                        break;
                                    case 10:
                                        return t.prev = 10, t.t0 = t.catch(6), t.abrupt("return");
                                    case 13:
                                        if (this.url = e, r = this.modules[n].transport, this.transport = new r.constructor(this.endpoint, this.type, r.options), i = this.type, this.type = !!Ke.isSupported(n) && n || Ke.fromMime(n), this.type) {
                                            t.next = 20;
                                            break
                                        }
                                        throw new Error("Bad stream type");
                                    case 20:
                                        if (i == this.type && this.client) {
                                            t.next = 28;
                                            break
                                        }
                                        if (!this.client) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.next = 24, this.client.destroy();
                                    case 24:
                                        s = this.modules[n].client, this.client = new s, t.next = 29;
                                        break;
                                    case 28:
                                        this.client.reset();
                                    case 29:
                                        this.queryCredentials && (this.client.queryCredentials = this.queryCredentials), this.remuxer && (this.remuxer.destroy(), this.remuxer = null), this.remuxer = new F(this.player), this.remuxer.attachClient(this.client), this.client.attachTransport(this.transport), this.client.setSource(this.endpoint), this.player.autoplay && this.start();
                                    case 36:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[6, 10]])
                        }));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "start", value: function () {
                        var t = this;
                        this.client && this.client.start().catch(function (e) {
                            t.errorHandler && t.errorHandler(e)
                        })
                    }
                }, {
                    key: "stop", value: function () {
                        this.client && this.client.stop()
                    }
                }, {
                    key: "destroy", value: function () {
                        var t = q()(U.a.mark(function t() {
                            return U.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.transport) {
                                            t.next = 6;
                                            break
                                        }
                                        if (!this.client) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4, this.client.detachTransport();
                                    case 4:
                                        return t.next = 6, this.transport.destroy();
                                    case 6:
                                        if (!this.client) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 9, this.client.destroy();
                                    case 9:
                                        this.remuxer && (this.remuxer.destroy(), this.remuxer = null);
                                    case 10:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }()
                }], [{
                    key: "canPlayWithModules", value: function (t, e) {
                        var n = {}, r = !0, i = !1, s = void 0;
                        try {
                            for (var a, o = nt()(e); !(r = (a = o.next()).done); r = !0) {
                                var u = a.value, h = u.transport || He, c = u.client || Nt;
                                h.canTransfer(c.streamType()) && (n[c.streamType()] = !0)
                            }
                        } catch (t) {
                            i = !0, s = t
                        } finally {
                            try {
                                !r && o.return && o.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        for (var l in n) if (l == Ke.fromMime(t)) return !0;
                        return !1
                    }
                }, {
                    key: "canPlay", value: function (t) {
                        return Ke.fromMime(t.type) || Ke.fromUrl(t.src)
                    }
                }]), t
            }();
            i = t, o("transport:ws").setLevel(t), o("client:rtsp").setLevel(r), o("mse").setLevel(r), window.Streamedian = {
                logger: function (t) {
                    return o(t)
                }, player: function (t, e) {
                    if (!e.socket) throw new Error("socket parameter is not set");
                    var n = {
                        modules: [{client: Nt, transport: {constructor: He, options: {socket: e.socket}}}],
                        errorHandler: function (t) {
                            alert("Failed to start player: " + t.message)
                        },
                        queryCredentials: function (t) {
                            return new J.a(function (e, n) {
                                var r = prompt("input credentials in format user:password");
                                r ? (t.setCredentials.apply(t, r.split(":")), e()) : n()
                            })
                        }
                    };
                    return new We(t, n)
                }
            }
        }();
        var dt = {
            name: "name", data: function () {
                return {
                    url2: "url2",
                    video2: "video2",
                    infoBox: [],
                    tableData4: [],
                    addressInfo: [],
                    info: {date: "", address: "", event: ""}
                }
            }, mounted: function () {
                this.getAddressBaseInfo()
            }, methods: {
                getAddressBaseInfo: function () {
                    var t = this;
                    f().then(function (e) {
                        t.addressInfo = e.data, t.getFireOrNot()
                    })
                }, getNowFormatDate: function () {
                    return (new Date).toLocaleString()
                }, getFireOrNot: function () {
                    var t = this;
                    setInterval(function () {
                        t.addressInfo.forEach(function (e) {
                            var n, r, i;
                            (n = {
                                addressId: e.id,
                                sensorName: "fire"
                            }, r = n.addressId, i = n.sensorName, l({
                                url: "/currentInfo/address/boxes/sensor?addressId=" + r + "&sensorName=" + i,
                                method: "post"
                            })).then(function (n) {
                                if (1 === n.data.value) {
                                    var r = {date: t.getNowFormatDate(), address: e.name, event: "发生火灾"};
                                    t.tableData4.push(r), console.log(t.tableData4)
                                }
                            })
                        })
                    }, 5e3)
                }, getCurrentFromMap: function (t) {
                    this.infoBox = t
                }, set_url: function (t, e) {
                    var n = document.getElementById(t).value;
                    document.getElementById(e).src = n, Streamedian.player(e, {socket: "ws://192.168.199.179:8081/ws"})
                }
            }, components: {infoBox: p, gaoDeMap: S, currentData: x}
        }, pt = {
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [n("el-row", {attrs: {gutter: 20}}, [n("el-col", {attrs: {span: 6}}, [n("infoBox", {attrs: {tableData4: t.tableData4}})], 1), t._v(" "), n("el-col", {attrs: {span: 12}}, [n("gao-de-map", {on: {getCurrentInfo: t.getCurrentFromMap}})], 1), t._v(" "), n("el-col", {attrs: {span: 6}}, [n("current-data", {attrs: {currentData: t.infoBox}})], 1)], 1), t._v(" "), n("el-row", {attrs: {gutter: 20}}, [n("el-col", {
                    staticStyle: {
                        height: "43vh",
                        "background-color": "red",
                        "margin-right": "18px"
                    }, attrs: {span: 2}
                }), t._v(" "), n("el-col", {
                    staticStyle: {
                        height: "43vh",
                        "background-color": "red",
                        "margin-right": "18px"
                    }, attrs: {span: 7}
                }, [n("div", {staticClass: "video"}, [n("div", [n("input", {
                    attrs: {
                        id: "url2",
                        value: "rtsp://admin:ckkjb208@192.168.199.199:554/MPEG-4/ch1/main/av_stream",
                        size: "36"
                    }
                }), t._v(" "), n("button", {
                    attrs: {id: "set_new_ur"}, on: {
                        click: function (e) {
                            t.set_url("url2", "video2")
                        }
                    }
                }, [t._v("Set")])]), t._v(" "), n("video", {
                    attrs: {
                        id: "video2",
                        controls: "",
                        autoplay: ""
                    }
                })])]), t._v(" "), n("el-col", {
                    staticStyle: {
                        height: "43vh",
                        "background-color": "red",
                        "margin-right": "18px"
                    }, attrs: {span: 7}
                }), t._v(" "), n("el-col", {
                    staticStyle: {height: "43vh", "background-color": "red"},
                    attrs: {span: 7}
                })], 1)], 1)
            }, staticRenderFns: []
        };
        var vt = n("VU/8")(dt, pt, !1, function (t) {
            n("Vwz0")
        }, null, null).exports, yt = n("/ocq");
        r.default.use(yt.a);
        var gt = [{path: "/", name: "HelloWorld", component: vt}], mt = new yt.a({routes: gt});
        r.default.config.productionTip = !1, r.default.use(s.a), new r.default({
            el: "#app",
            router: mt,
            components: {App: o},
            template: "<App/>"
        })
    }, Sjqz: function (t, e) {
    }, Vwz0: function (t, e) {
    }, "m/pD": function (t, e) {
    }, tvR6: function (t, e) {
    }, ueiY: function (t, e) {
    }
}, ["NHnr"]);
//# sourceMappingURL=app.e0913666fb573459843e.js.map