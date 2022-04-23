--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: card; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.card (
    id integer NOT NULL,
    "catId" text,
    "dogId" text,
    "imgSrc" text NOT NULL,
    "likesCount" smallint DEFAULT '0'::smallint NOT NULL
);


ALTER TABLE public.card OWNER TO postgres;

--
-- Name: card_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.card_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.card_id_seq OWNER TO postgres;

--
-- Name: card_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.card_id_seq OWNED BY public.card.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    email text NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: card id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card ALTER COLUMN id SET DEFAULT nextval('public.card_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: card; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.card (id, "catId", "dogId", "imgSrc", "likesCount") FROM stdin;
11	\N	australian	https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg	0
13	\N	basenji	https://images.dog.ceo/breeds/basenji/n02110806_3056.jpg	0
15	\N	beagle	https://images.dog.ceo/breeds/beagle/n02088364_12973.jpg	0
17	\N	bluetick	https://images.dog.ceo/breeds/bluetick/n02088632_2965.jpg	0
19	\N	borzoi	https://images.dog.ceo/breeds/borzoi/n02090622_7307.jpg	0
4	\N	affenpinscher	https://images.dog.ceo/breeds/affenpinscher/n02110627_6796.jpg	0
23	\N	boxer	https://images.dog.ceo/breeds/boxer/n02108089_1511.jpg	0
25	\N	brabancon	https://images.dog.ceo/breeds/brabancon/n02112706_1303.jpg	0
27	\N	briard	https://images.dog.ceo/breeds/briard/n02105251_5570.jpg	0
29	\N	buhund	https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg	0
31	\N	bulldog	https://images.dog.ceo/breeds/bulldog-boston/n02096585_6367.jpg	0
33	\N	bullterrier	https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_3529.jpg	0
21	\N	bouvier	https://images.dog.ceo/breeds/bouvier/n02106382_2105.jpg	0
35	\N	cattledog	https://images.dog.ceo/breeds/cattledog-australian/IMG_0206.jpg	0
37	\N	chihuahua	https://images.dog.ceo/breeds/chihuahua/n02085620_735.jpg	0
39	\N	chow	https://images.dog.ceo/breeds/chow/n02112137_2058.jpg	0
41	\N	clumber	https://images.dog.ceo/breeds/clumber/n02101556_4580.jpg	0
43	\N	cockapoo	https://images.dog.ceo/breeds/cockapoo/george-tongue.jpeg	0
1	\N	akita	https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg	5
45	\N	collie	https://images.dog.ceo/breeds/collie/n02106030_15631.jpg	0
47	\N	coonhound	https://images.dog.ceo/breeds/coonhound/n02089078_1758.jpg	0
2	\N	airedale	https://images.dog.ceo/breeds/airedale/n02096051_7132.jpg	0
49	\N	corgi	https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10077.jpg	0
51	\N	cotondetulear	https://images.dog.ceo/breeds/cotondetulear/IMG_20160830_202631573.jpg	0
3	\N	african	https://images.dog.ceo/breeds/african/n02116738_124.jpg	2
53	\N	dachshund	https://images.dog.ceo/breeds/dachshund/dachshund-1018409_640.jpg	0
55	\N	dalmatian	https://images.dog.ceo/breeds/dalmatian/cooper2.jpg	0
8	\N	appenzeller	https://images.dog.ceo/breeds/appenzeller/n02107908_3311.jpg	0
57	\N	dane	https://images.dog.ceo/breeds/dane-great/n02109047_744.jpg	0
59	\N	deerhound	https://images.dog.ceo/breeds/deerhound-scottish/n02092002_6380.jpg	0
61	\N	dhole	https://images.dog.ceo/breeds/dhole/n02115913_2524.jpg	0
63	\N	dingo	https://images.dog.ceo/breeds/dingo/n02115641_6380.jpg	0
65	\N	doberman	https://images.dog.ceo/breeds/doberman/n02107142_18779.jpg	0
67	\N	elkhound	https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_4951.jpg	0
69	\N	entlebucher	https://images.dog.ceo/breeds/entlebucher/n02108000_2611.jpg	0
71	\N	eskimo	https://images.dog.ceo/breeds/eskimo/n02109961_6119.jpg	0
73	\N	finnish	https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg	0
75	\N	frise	https://images.dog.ceo/breeds/frise-bichon/5.jpg	0
79	\N	greyhound	https://images.dog.ceo/breeds/greyhound-italian/n02091032_12144.jpg	0
83	\N	havanese	https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191112123933390_COVER.jpg	0
93	\N	komondor	https://images.dog.ceo/breeds/komondor/n02105505_955.jpg	0
101	\N	leonberg	https://images.dog.ceo/breeds/leonberg/n02111129_2718.jpg	0
129	\N	pembroke	https://images.dog.ceo/breeds/pembroke/n02113023_6869.jpg	0
149	\N	retriever	https://images.dog.ceo/breeds/retriever-curly/n02099429_2925.jpg	0
163	\N	setter	https://images.dog.ceo/breeds/setter-english/n02100735_7553.jpg	0
167	\N	shiba	https://images.dog.ceo/breeds/shiba/shiba-2.jpg	0
89	\N	keeshond	https://images.dog.ceo/breeds/keeshond/n02112350_4368.jpg	0
99	\N	labrador	https://images.dog.ceo/breeds/labrador/n02099712_5008.jpg	0
113	\N	mexicanhairless	https://images.dog.ceo/breeds/mexicanhairless/n02113978_3220.jpg	0
127	\N	pekinese	https://images.dog.ceo/breeds/pekinese/n02086079_14532.jpg	0
131	\N	pinscher	https://images.dog.ceo/breeds/pinscher-miniature/n02107312_6695.jpg	0
135	\N	pointer	https://images.dog.ceo/breeds/pointer-german/n02100236_2045.jpg	0
143	\N	puggle	https://images.dog.ceo/breeds/puggle/IMG_080306.jpg	0
159	\N	schipperke	https://images.dog.ceo/breeds/schipperke/n02104365_6428.jpg	0
81	\N	groenendael	https://images.dog.ceo/breeds/groenendael/n02105056_6523.jpg	0
85	\N	hound	https://images.dog.ceo/breeds/hound-afghan/n02088094_5504.jpg	0
95	\N	kuvasz	https://images.dog.ceo/breeds/kuvasz/n02104029_2500.jpg	0
107	\N	malinois	https://images.dog.ceo/breeds/malinois/n02105162_2168.jpg	0
111	\N	mastiff	https://images.dog.ceo/breeds/mastiff-bull/n02108422_4454.jpg	0
125	\N	papillon	https://images.dog.ceo/breeds/papillon/n02086910_2168.jpg	0
145	\N	pyrenees	https://images.dog.ceo/breeds/pyrenees/n02111500_3513.jpg	0
147	\N	redbone	https://images.dog.ceo/breeds/redbone/n02090379_433.jpg	0
171	\N	spaniel	https://images.dog.ceo/breeds/spaniel-brittany/n02101388_733.jpg	0
177	\N	terrier	https://images.dog.ceo/breeds/terrier-border/n02093754_5606.jpg	0
189	\N	wolfhound	https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6437.jpg	0
105	\N	malamute	https://images.dog.ceo/breeds/malamute/n02110063_15163.jpg	0
117	\N	mountain	https://images.dog.ceo/breeds/mountain-swiss/n02107574_1132.jpg	0
123	\N	ovcharka	https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20191105_141904.jpg	0
139	\N	poodle	https://images.dog.ceo/breeds/poodle-toy/n02113624_6230.jpg	0
153	\N	rottweiler	https://images.dog.ceo/breeds/rottweiler/n02106550_4191.jpg	0
165	\N	sheepdog	https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_6557.jpg	0
181	\N	vizsla	https://images.dog.ceo/breeds/vizsla/n02100583_453.jpg	0
87	\N	husky	https://images.dog.ceo/breeds/husky/20180904_185604.jpg	0
97	\N	labradoodle	https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.png	0
109	\N	maltese	https://images.dog.ceo/breeds/maltese/n02085936_8224.jpg	0
157	\N	samoyed	https://images.dog.ceo/breeds/samoyed/n02111889_6425.jpg	0
161	\N	schnauzer	https://images.dog.ceo/breeds/schnauzer-giant/n02097130_2135.jpg	0
175	\N	stbernard	https://images.dog.ceo/breeds/stbernard/n02109525_6693.jpg	0
179	\N	tervuren	https://images.dog.ceo/breeds/tervuren/shadow_and_frisbee.jpg	0
185	\N	weimaraner	https://images.dog.ceo/breeds/weimaraner/n02092339_3091.jpg	0
77	\N	germanshepherd	https://images.dog.ceo/breeds/germanshepherd/IMG_20200801_005825_408.jpg	0
91	\N	kelpie	https://images.dog.ceo/breeds/kelpie/n02105412_2589.jpg	0
103	\N	lhasa	https://images.dog.ceo/breeds/lhasa/n02098413_643.jpg	0
115	\N	mix	https://images.dog.ceo/breeds/mix/Cali-Mini-Labradoodle.jpg	0
119	\N	newfoundland	https://images.dog.ceo/breeds/newfoundland/n02111277_4881.jpg	0
121	\N	otterhound	https://images.dog.ceo/breeds/otterhound/n02091635_1311.jpg	0
133	\N	pitbull	https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg	0
137	\N	pomeranian	https://images.dog.ceo/breeds/pomeranian/n02112018_9028.jpg	0
141	\N	pug	https://images.dog.ceo/breeds/pug/n02110958_11632.jpg	0
151	\N	ridgeback	https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_2427.jpg	0
155	\N	saluki	https://images.dog.ceo/breeds/saluki/n02091831_8843.jpg	0
169	\N	shihtzu	https://images.dog.ceo/breeds/shihtzu/n02086240_7248.jpg	0
173	\N	springer	https://images.dog.ceo/breeds/springer-english/n02102040_6846.jpg	0
183	\N	waterdog	https://images.dog.ceo/breeds/waterdog-spanish/20180723_185559.jpg	0
187	\N	whippet	https://images.dog.ceo/breeds/whippet/n02091134_39.jpg	0
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1649463157377	init1649463157377
2	1650640313492	addCards1650640313492
\.


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, password, email) FROM stdin;
4	puk	123456	kispis@mail.ru
37	sanya	123	pp@mail.ru
\.


--
-- Name: card_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.card_id_seq', 370, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 2, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 37, true);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: card PK_9451069b6f1199730791a7f4ae4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card
    ADD CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: card UQ_1915b2ee2e1c8a4735a46650f97; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card
    ADD CONSTRAINT "UQ_1915b2ee2e1c8a4735a46650f97" UNIQUE ("dogId");


--
-- Name: card UQ_ccfd877855a23008788b987d17b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card
    ADD CONSTRAINT "UQ_ccfd877855a23008788b987d17b" UNIQUE ("catId");


--
-- PostgreSQL database dump complete
--

