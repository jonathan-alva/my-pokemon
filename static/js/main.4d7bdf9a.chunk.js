(this["webpackJsonpmy-pokemon"]=this["webpackJsonpmy-pokemon"]||[]).push([[0],{168:function(e,n,t){"use strict";var o=t(111),c=t.n(o),a=t(166),r=t(65),u={GET_POKEMON_TYPES:"GET_POKEMON_TYPES",GET_POKEMON_OWNED:"GET_POKEMON_OWNED",GET_POKEMON_OWNED_COUNT:"GET_POKEMON_OWNED_COUNT",GET_POKEMON_SPECIES:"GET_POKEMON_SPECIES",GET_POKEMON:"GET_POKEMON"},i=t(430),p=t(87),m=t(63);t.d(n,"b",(function(){return O}));var s={pokemonTypes:[],pokemonOwned:[],pokemonOwnedCount:[],pokemonSpecies:[],pokemon:[]};var O=function(){return function(){var e=Object(a.a)(c.a.mark((function e(n){var t,o,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.getPokemonTypes();case 3:return t=e.sent,n({type:u.GET_POKEMON_TYPES,pokemonTypes:t}),e.next=7,m.a.getPokemonOwned();case 7:return o=e.sent,n({type:u.GET_POKEMON_OWNED,pokemonOwned:o}),e.next=11,m.a.getPokemonOwnedCount();case 11:return a=e.sent,n({type:u.GET_POKEMON_OWNED_COUNT,pokemonOwnedCount:a}),e.next=15,m.a.getPokemonSpecies();case 15:return r=e.sent,n({type:u.GET_POKEMON_SPECIES,pokemonSpecies:r}),e.next=19,m.a.getPokemon();case 19:i=e.sent,n({type:u.GET_POKEMON,pokemon:i}),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(n){return e.apply(this,arguments)}}()},E=Object(p.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.GET_POKEMON_TYPES:return Object(r.a)({},e,{pokemonTypes:n.pokemonTypes});case u.GET_POKEMON_OWNED:return Object(r.a)({},e,{pokemonOwned:n.pokemonOwned});case u.GET_POKEMON_OWNED_COUNT:return Object(r.a)({},e,{pokemonOwnedCount:n.pokemonOwnedCount});case u.GET_POKEMON_SPECIES:return Object(r.a)({},e,{pokemonSpecies:n.pokemonSpecies});case u.GET_POKEMON:return Object(r.a)({},e,{pokemon:n.pokemon});default:return e}}),Object(p.a)(i.a));n.a=E},431:function(e,n,t){e.exports=t(526)},503:function(e,n,t){},504:function(e,n,t){},526:function(e,n,t){"use strict";t.r(n);t(432),t(441),t(220),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(132),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(229),t(231),t(232),t(233),t(234),t(235),t(236),t(238),t(239),t(142),t(241),t(242),t(81),t(243),t(244),t(246),t(247),t(248),t(249),t(250),t(251),t(252),t(253),t(254),t(255),t(256),t(257),t(260),t(261),t(262),t(263),t(143),t(66),t(264),t(266),t(267),t(268),t(269),t(270),t(271),t(272),t(274),t(275),t(276),t(277),t(278),t(279),t(280),t(281),t(144),t(282),t(283),t(284),t(286),t(288),t(289),t(290),t(291),t(292),t(293),t(295),t(296),t(298),t(299),t(300),t(302),t(303),t(304),t(305),t(306),t(307),t(308),t(310),t(311),t(312),t(313),t(314),t(315),t(316),t(317),t(94),t(318),t(319),t(325),t(326),t(327),t(328),t(329),t(330),t(331),t(332),t(333),t(334),t(335),t(336),t(337),t(338),t(152),t(339),t(340),t(95),t(341),t(342),t(343),t(344),t(79),t(345),t(346),t(349),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(365),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(375),t(376),t(377),t(378),t(379),t(380),t(381),t(382),t(383),t(384),t(385),t(386),t(387),t(388),t(389),t(390),t(391),t(392),t(393),t(394),t(395),t(396),t(397),t(398),t(399),t(400),t(401),t(402),t(403),t(404),t(405),t(406),t(407),t(108),t(409),t(452),t(453),t(454),t(455),t(456),t(457),t(183),t(184),t(185),t(186),t(187),t(188),t(189),t(190),t(191),t(192),t(193),t(194),t(195),t(196),t(197),t(198),t(199),t(459),t(460),t(461),t(462),t(463),t(464),t(465),t(466),t(467),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(476),t(477),t(478),t(479),t(480),t(481),t(482),t(483),t(484),t(485),t(486),t(200),t(202),t(203),t(204),t(205),t(206),t(207),t(208),t(209),t(210),t(211),t(212),t(213),t(214),t(215),t(216),t(217),t(218),t(487),t(488),t(489),t(491),t(224),t(225),t(226),t(492),t(493),t(494),t(495),t(496),t(497),t(498),t(410),t(124),t(411),t(412),t(413),t(415),t(157);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var o=t(1),c=t.n(o),a=t(109),r=t.n(a),u=(t(503),t(161)),i=t(162),p=t(164),m=t(163),s=t(165),O=(t(504),t(419)),E=t(50),k=c.a.lazy((function(){return t.e(8).then(t.bind(null,564))})),f=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(p.a)(this,Object(m.a)(n).call(this,e))).state={},t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(o.Fragment,null,c.a.createElement(O.a,{basename:"/my-pokemon"},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/",name:"Pokemon",render:function(e){return c.a.createElement(k,e)}})))))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=t(167),l=t(168);r.a.render(c.a.createElement(P.a,{store:l.a},c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,n,t){"use strict";var o=t(64),c=t.n(o),a="https://my-pokemon-api.000webhostapp.com",r="https://pokeapi.co/api/v2",u=function(e,n){return new Promise((function(t,o){c.a.get("".concat(n?r:a,"/").concat(e)).then((function(e){t(e.data)}),(function(e){o(e)}))}))},i={getPokemonList:function(e){return u("pokemon?offset=".concat(e,"&limit=20"),!0)},getPokemonOwned:function(){return u("/Get/GetPokemonOwned.php",!1)},getPokemonOwnedCount:function(){return u("/Get/GetPokemonOwnedWithCount.php",!1)},getPokemonOwnedCountID:function(e){return u("/Get/GetPokemonOwnedWithCount.php?id=".concat(e),!1)},getPokemonOwnedID:function(e){return u("/Get/GetPokemonOwned.php?id=".concat(e),!1)},getPokemonTypes:function(){return u("type",!0)},getPokemonTypesData:function(e){return u("type/".concat(e),!0)},getPokemonSpecies:function(){return u("pokemon-species",!0)},getPokemonSpeciesOffset:function(e){return u("pokemon-species?offset=".concat(e,"&limit=20"),!0)},getPokemon:function(){return u("pokemon",!0)},getPokemonData:function(e){return u("pokemon/".concat(e),!0)},getPokemonOffset:function(e){return u("pokemon?offset=".concat(e,"&limit=20"),!0)},getPokemonSpeciesData:function(e){return u("pokemon-species/".concat(e),!0)},getAbilityData:function(e){return u("ability/".concat(e),!0)},getMoveData:function(e){return u("move/".concat(e),!0)},getStatData:function(e){return u("stat/".concat(e),!0)},postPokemon:function(e,n){return u("Post/PostPokemonOwned.php?pokemon_id=".concat(e,"&nickname=").concat(n),!1)},deletePokemon:function(e){return u("Delete/DeletePokemon.php?id=".concat(e),!1)}};n.a=i}},[[431,1,2]]]);
//# sourceMappingURL=main.4d7bdf9a.chunk.js.map