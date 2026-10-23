"""
Disease Information and Treatment Guidance Module
Contains verified agricultural data for 38 classes of the PlantVillage dataset.
"""

DISEASE_INFO = {
    "Apple___Apple_scab": {
        "crop": "Apple",
        "condition": "Apple Scab",
        "is_healthy": False,
        "pathogen": "Venturia inaequalis (Ascomycete fungus)",
        "symptoms": [
            "Dull olive-green to black velvety spots on leaf surface",
            "Puckered or curled leaves that drop prematurely",
            "Scabby, cracked lesions on mature fruit skin",
            "Reduced tree vigor and photosynthetic efficiency"
        ],
        "prevention": [
            "Rake and remove infected fallen leaves to break ascospore overwintering cycle",
            "Prune overcrowded inner branches to facilitate leaf canopy air circulation",
            "Avoid overhead sprinkler irrigation that keeps leaves wet for over 9 hours"
        ],
        "treatment": [
            "Apply approved organic sulfur or potassium bicarbonate at first green tip stage",
            "In commercial orchards, apply targeted DMI or strobilurin fungicides according to local agricultural extension schedules",
            "Ensure thorough spray coverage on both upper and lower leaf surfaces"
        ]
    },
    "Apple___Black_rot": {
        "crop": "Apple",
        "condition": "Black Rot (Frogeye Leaf Spot)",
        "is_healthy": False,
        "pathogen": "Botryosphaeria obtusa (Fungus)",
        "symptoms": [
            "Small purple flecks that enlarge into circular lesions with light brown centers ('frogeye')",
            "Dark concentric fungal rings inside mature leaf spots",
            "Firm, rotting dark brown fruit mummies hanging on branches",
            "Cankers on twigs and bark with sunken margins"
        ],
        "prevention": [
            "Prune and destroy infected cankered limbs at least 15 cm below visible lesions",
            "Remove and destroy mummified fruit left on trees from previous seasons",
            "Disinfect pruning shears with 70% alcohol between cuts"
        ],
        "treatment": [
            "Apply captan or thiophanate-methyl protective sprays starting at silver tip through second cover",
            "Coordinate with local agronomic advisory for seasonal fungicide timings",
            "Use sanitation as the primary line of defense"
        ]
    },
    "Apple___Cedar_apple_rust": {
        "crop": "Apple",
        "condition": "Cedar Apple Rust",
        "is_healthy": False,
        "pathogen": "Gymnosporangium juniperi-virginianae (Heteroecious Rust Fungus)",
        "symptoms": [
            "Bright yellow-orange or reddish spots on upper leaf surface",
            "Raised black speck-like pycnia appearing inside spots",
            "Tube-like aecial structures protruding from leaf undersides in late summer"
        ],
        "prevention": [
            "Inspect nearby Eastern red cedar or juniper trees for gelatinous orange galls",
            "Plant rust-resistant apple varieties (e.g. Honeycrisp, Freedom, Redfree)",
            "Remove nearby alternative juniper hosts within 1-2 km if feasible"
        ],
        "treatment": [
            "Apply myclobutanil or mancozeb based protective fungicides before rainy spore flight periods",
            "Target applications during early bloom when teliospores are active on junipers"
        ]
    },
    "Apple___healthy": {
        "crop": "Apple",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": [
            "Uniform deep green coloration across leaf lamina",
            "Intact leaf margins free of lesions, necrosis, or chlorotic halos",
            "Supple leaf texture with regular vascular venation"
        ],
        "prevention": [
            "Continue standard orchard scouting routine every 7 days",
            "Maintain calibrated drip or furrow irrigation avoiding canopy soaking",
            "Ensure proper balanced nitrogen-potassium soil fertilization"
        ],
        "treatment": [
            "No chemical treatment required",
            "Log visual inspection in farm health registry"
        ]
    },
    "Blueberry___healthy": {
        "crop": "Blueberry",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": [
            "Glossy, leather-like leaves with vivid dark green pigmentation",
            "No anthracnose lesions, iron chlorosis, or bacterial scorch"
        ],
        "prevention": [
            "Maintain acidic soil pH between 4.5 and 5.2",
            "Ensure consistent pine bark mulching to retain root moisture"
        ],
        "treatment": [
            "No corrective treatment needed",
            "Sustain routine soil and canopy monitoring"
        ]
    },
    "Cherry_(including_sour)___Powdery_mildew": {
        "crop": "Cherry",
        "condition": "Powdery Mildew",
        "is_healthy": False,
        "pathogen": "Podosphaera clandestina (Fungus)",
        "symptoms": [
            "White talcum powder-like fungal patches on leaf surface and shoots",
            "Curling, blistering, and upward rolling of tender young foliage",
            "Stunted vegetative terminal shoots"
        ],
        "prevention": [
            "Prune out severely infected water-sprouts and dense canopy growth",
            "Avoid excess nitrogen fertilizer which stimulates vulnerable tender tissue",
            "Increase air circulation within the tree frame"
        ],
        "treatment": [
            "Spray potassium bicarbonate or neem-based biorationals upon initial spot appearance",
            "Rotate FRAC group 3 and group 11 fungicides to prevent resistance"
        ]
    },
    "Cherry_(including_sour)___healthy": {
        "crop": "Cherry",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Firm emerald leaves with serrated margins intact", "Normal venation without mottle or necrotic holes"],
        "prevention": ["Maintain clean orchard floor and good weed suppression", "Perform summer pruning in dry weather"],
        "treatment": ["No chemical fungicides necessary", "Maintain routine agricultural management"]
    },
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
        "crop": "Corn (Maize)",
        "condition": "Gray Leaf Spot",
        "is_healthy": False,
        "pathogen": "Cercospora zeae-maydis (Fungus)",
        "symptoms": [
            "Narrow rectangular lesions strictly restricted by parallel leaf veins",
            "Tan to gray necrotic spots expanding to 2-7 cm in length",
            "Coalescence of lesions causing extensive blighting of canopy leaves"
        ],
        "prevention": [
            "Rotate non-host crops (soybeans, alfalfa) for at least 1-2 seasons",
            "Select high-rated hybrid corn varieties with GLS genetic tolerance",
            "Till infected residue under in high-risk continuous-corn systems"
        ],
        "treatment": [
            "Apply strobilurin (QoI) or triazole (DMI) based foliar fungicides at VT-R1 (silking)",
            "Follow local university extension IPM thresholds before spraying"
        ]
    },
    "Corn_(maize)___Common_rust_": {
        "crop": "Corn (Maize)",
        "condition": "Common Rust",
        "is_healthy": False,
        "pathogen": "Puccinia sorghi (Fungus)",
        "symptoms": [
            "Small, powdery cinnamon-brown to dark-red pustules on both leaf surfaces",
            "Pustules rupture the leaf epidermis revealing powdery spores",
            "Lesions clustered in bands across the leaf where dew collected"
        ],
        "prevention": [
            "Plant rust-resistant corn hybrids bearing Rp1 resistance genes",
            "Plant early in the season to evade southward windblown spore arrivals"
        ],
        "treatment": [
            "Fungicide treatment is generally recommended only if rust covers >5% of leaves prior to dent stage",
            "Triazole fungicides provide effective therapeutic suppression when applied early"
        ]
    },
    "Corn_(maize)___Northern_Leaf_Blight": {
        "crop": "Corn (Maize)",
        "condition": "Northern Leaf Blight",
        "is_healthy": False,
        "pathogen": "Setosphaeria turcica / Exserohilum turcicum (Fungus)",
        "symptoms": [
            "Long, elliptical, cigar-shaped grayish-green to tan lesions (2 to 15 cm)",
            "Dark olive velvety fungal sporulation inside lesions under humid conditions",
            "Extensive leaf desiccation making foliage appear frost-damaged"
        ],
        "prevention": [
            "Select corn hybrids containing Ht-resistance genes",
            "Implement minimum two-year crop rotation with non-gramineous crops",
            "Chop crop debris post-harvest to speed microbial breakdown"
        ],
        "treatment": [
            "Apply protective foliar fungicides (pyraclostrobin or azoxystrobin) at silking if disease pressure threatens ear leaves",
            "Calibrate tractor spray boom pressure for deep canopy penetration"
        ]
    },
    "Corn_(maize)___healthy": {
        "crop": "Corn (Maize)",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Robust lanceolate green leaves with strong central midrib", "Clean margins with healthy turgor"],
        "prevention": ["Maintain side-dress nitrogen management based on crop growth stage", "Scout weekly for pests"],
        "treatment": ["No curative action needed", "Record field stage for growth tracking"]
    },
    "Grape___Black_rot": {
        "crop": "Grape",
        "condition": "Black Rot",
        "is_healthy": False,
        "pathogen": "Guignardia bidwellii (Fungus)",
        "symptoms": [
            "Circular reddish-brown leaf spots with dark brown margins and tiny black pycnidia",
            "Infected berries turn pale, shrivel rapidly, and turn into hard black wrinkled mummies",
            "Sunken purple-black cankers on green shoots"
        ],
        "prevention": [
            "Prune and destroy all mummified grape clusters clinging to the vine or trellis",
            "Open grape canopy through shoot thinning and leaf pulling around fruit zones"
        ],
        "treatment": [
            "Apply myclobutanil, kresoxim-methyl, or tebuconazole during critical pre-bloom to post-bloom window",
            "Organic vineyards use copper hydroxide and sulfur with tight preventative schedules"
        ]
    },
    "Grape___Esca_(Black_Measles)": {
        "crop": "Grape",
        "condition": "Esca (Black Measles)",
        "is_healthy": False,
        "pathogen": "Complex of Phaeomoniella chlamydospora & Fomitiporia mediterranea",
        "symptoms": [
            "Interveinal yellow or red chlorosis followed by necrosis ('tiger-stripe' pattern)",
            "Dark brown or purple speckles on berry skins ('measles')",
            "Sudden apoplectic summer vine wilting"
        ],
        "prevention": [
            "Prune late in the dormant season when wound healing is accelerated",
            "Avoid large pruning cuts where rain can wash fungal spores into vascular vessels",
            "Source certified disease-free nursery stock"
        ],
        "treatment": [
            "Trunk renewal technique: train a sucker cane from below dead wood to replace the vine",
            "Coat large pruning cuts with wound sealants containing Trichoderma biocontrols"
        ]
    },
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
        "crop": "Grape",
        "condition": "Leaf Blight (Isariopsis)",
        "is_healthy": False,
        "pathogen": "Pseudocercospora vitis (Fungus)",
        "symptoms": [
            "Irregular brown angular necrotic patches delimited by minor leaf veins",
            "Dark velvety fungal sporulation on lower leaf surface",
            "Premature leaf yellowing, browning, and defoliation"
        ],
        "prevention": ["Prune excess lateral shoots to ensure good sunlight penetration", "Rake fallen leaves after autumn harvest"],
        "treatment": ["Apply copper oxychloride or azoxystrobin spray when lesions first appear", "Ensure bottom-to-top canopy spray penetration"]
    },
    "Grape___healthy": {
        "crop": "Grape",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Vibrant green palmate leaves with sharp margins", "Uniform chlorophyll distribution"],
        "prevention": ["Continue standard shoot positioning and canopy hedging", "Maintain preventive mildew scouting"],
        "treatment": ["No chemical treatment required", "Document canopy development stage"]
    },
    "Orange___Haunglongbing_(Citrus_greening)": {
        "crop": "Orange (Citrus)",
        "condition": "Huanglongbing (HLB / Citrus Greening)",
        "is_healthy": False,
        "pathogen": "Candidatus Liberibacter asiaticus (Bacterium transmitted by Asian citrus psyllid)",
        "symptoms": [
            "Asymmetric blotchy mottled chlorosis across leaf midrib",
            "Thickened, corky, or raised yellow leaf veins",
            "Twig dieback, stunted tree canopy, and yellow shoots",
            "Lopsided, small fruit that remains green at the blossom end with bitter taste"
        ],
        "prevention": [
            "Strict vector control of Asian Citrus Psyllid (ACP) using IPM biocontrol or systemic treatments",
            "Plant only certified disease-free citrus trees from screened nurseries",
            "Nutritional foliar therapy to prolong tree health"
        ],
        "treatment": [
            "HLB has no cure once trees are systemically infected; eradication of symptomatic trees is standard protocol in non-endemic zones",
            "Maintain strict regional quarantine and reporting"
        ]
    },
    "Peach___Bacterial_spot": {
        "crop": "Peach",
        "condition": "Bacterial Spot",
        "is_healthy": False,
        "pathogen": "Xanthomonas arboricola pv. pruni (Bacterium)",
        "symptoms": [
            "Angular water-soaked purple or dark brown lesions on leaves",
            "Centers of lesions drop out creating a distinct 'shothole' appearance",
            "Deep pitting and dark sunken lesions on peach fruit skin"
        ],
        "prevention": [
            "Plant bacterial spot-resistant peach cultivars",
            "Erect windbreaks to diminish blowing sand that abrasively wounds leaves",
            "Avoid overhead irrigation"
        ],
        "treatment": [
            "Apply low-dose copper bactericide or oxytetracycline starting at shuck split through petal fall",
            "Carefully manage copper rate to avoid foliar phytotoxicity"
        ]
    },
    "Peach___healthy": {
        "crop": "Peach",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Glossy lanceolate leaves with smooth finely serrated borders", "Rich deep green color without holes or curling"],
        "prevention": ["Apply dormant fungicide spray in late autumn to prevent peach leaf curl", "Maintain scheduled trickle irrigation"],
        "treatment": ["No chemical treatment required", "Continue routine orchard maintenance"]
    },
    "Pepper,_bell___Bacterial_spot": {
        "crop": "Bell Pepper",
        "condition": "Bacterial Spot",
        "is_healthy": False,
        "pathogen": "Xanthomonas euvesicatoria (Bacterium)",
        "symptoms": [
            "Small circular to irregular water-soaked spots that turn dark brown",
            "Lesions surrounded by a narrow yellow halo",
            "Severe blighting and premature leaf drop exposing fruit to sunscald"
        ],
        "prevention": [
            "Purchase hot-water treated or certified disease-free seeds",
            "Choose bell pepper varieties with genetic resistance (Xcv races)",
            "Rotate with non-solanaceous crops for minimum 2 years"
        ],
        "treatment": [
            "Apply preventive copper hydroxide combined with mancozeb for synergistic bactericidal action",
            "Incorporate Actigard for systemic acquired resistance (SAR)"
        ]
    },
    "Pepper,_bell___healthy": {
        "crop": "Bell Pepper",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Broad vibrant green leaves with smooth intact margins", "Vigorous branching with healthy floral buds"],
        "prevention": ["Maintain consistent soil moisture to prevent blossom end rot", "Use reflective mulch to deter insect vectors"],
        "treatment": ["No therapeutic chemicals needed", "Log monitoring data into crop register"]
    },
    "Potato___Early_blight": {
        "crop": "Potato",
        "condition": "Early Blight",
        "is_healthy": False,
        "pathogen": "Alternaria solani (Fungus)",
        "symptoms": [
            "Dark brown to black lesions showing distinctive 'target-board' concentric rings",
            "Lesions initially emerge on older lower canopy leaves",
            "Chlorotic yellow margin encircling each lesion"
        ],
        "prevention": [
            "Follow a 3-year crop rotation avoiding other Solanaceae",
            "Plant certified disease-free seed tubers",
            "Maintain adequate nitrogen and soil moisture to reduce plant stress"
        ],
        "treatment": [
            "Initiate protective fungicide sprays (chlorothalonil, mancozeb) when rows close",
            "Rotate with curative options such as azoxystrobin, difenoconazole, or boscalid"
        ]
    },
    "Potato___Late_blight": {
        "crop": "Potato",
        "condition": "Late Blight",
        "is_healthy": False,
        "pathogen": "Phytophthora infestans (Oomycete)",
        "symptoms": [
            "Water-soaked dark green to purplish-black expanding lesions",
            "White delicate cottony spore mold visible on underside of leaf during humid mornings",
            "Rapid systemic collapse of canopy within days"
        ],
        "prevention": [
            "Never plant volunteer potatoes or seed tubers showing rot",
            "Eliminate cull piles where Phytophthora overwinters",
            "Select resistant potato varieties (e.g. Defender, Sarpo Mira)"
        ],
        "treatment": [
            "Apply protective contact fungicides before disease outbreak",
            "If active lesions appear, spray targeted oomycete fungicides: cyazofamid or mandipropamid",
            "Desiccate vines 2-3 weeks prior to tuber harvest to prevent tuber contamination"
        ]
    },
    "Potato___healthy": {
        "crop": "Potato",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Lush compound pinnate leaves with vivid green color", "Strong erect stems with abundant floral blossoms"],
        "prevention": ["Maintain proper hilling to protect developing tubers from sun greening", "Scout for potato beetles"],
        "treatment": ["No chemical application required", "Continue routine crop development tracking"]
    },
    "Raspberry___healthy": {
        "crop": "Raspberry",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Compound leaves with crisp serrated leaflets and silvery-green undersides", "Vigorous primocane growth"],
        "prevention": ["Keep cane rows narrow to maximize air movement", "Prune out spent floricanes after summer harvest"],
        "treatment": ["No chemical action needed", "Maintain standard raspberry trellis management"]
    },
    "Soybean___healthy": {
        "crop": "Soybean",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Trifoliate leaves with deep green uniform color and velvety pubescence", "Healthy root nodulation"],
        "prevention": ["Maintain crop rotation with corn or small grains", "Select varieties with genetic resistance to root rot"],
        "treatment": ["No pesticide intervention required", "Track growth stages for accurate record keeping"]
    },
    "Squash___Powdery_mildew": {
        "crop": "Squash / Cucurbits",
        "condition": "Powdery Mildew",
        "is_healthy": False,
        "pathogen": "Podosphaera xanthii (Fungus)",
        "symptoms": [
            "White talc-like powdery fungal spots expanding on both upper and lower leaf surfaces",
            "Leaves turn yellow, brown, and become brittle and dry ('paper-like')",
            "Premature leaf senescence leading to fruit sunscald"
        ],
        "prevention": [
            "Plant squash cultivars bred with powdery mildew resistance (PMR varieties)",
            "Space plants generously to promote rapid foliar drying"
        ],
        "treatment": [
            "Spray potassium bicarbonate or horticultural mineral oils at first sign",
            "Rotate fungicides across FRAC groups (e.g. Quintec, Luna Sensation) to avoid resistance"
        ]
    },
    "Strawberry___Leaf_scorch": {
        "crop": "Strawberry",
        "condition": "Leaf Scorch",
        "is_healthy": False,
        "pathogen": "Diplocarpon earlianum (Fungus)",
        "symptoms": [
            "Numerous small, irregular purple to dark purplish-brown blotches on upper leaf surface",
            "As spots coalesce, entire leaf margins appear scorched and curl upward"
        ],
        "prevention": [
            "Plant certified pathogen-free strawberry bare-root or plug plants",
            "Avoid overhead sprinkler irrigation; convert to drip lines",
            "Renovate strawberry beds immediately after harvest"
        ],
        "treatment": [
            "Apply protective fungicides (captan) in spring as new growth resumes",
            "Rotate with strobilurins or triazoles if disease pressure is intense"
        ]
    },
    "Strawberry___healthy": {
        "crop": "Strawberry",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": ["Glossy trifoliate green leaves with clean saw-toothed margins", "Abundant white floral blooms"],
        "prevention": ["Maintain clean straw or plastic mulch under fruit", "Scout for spider mites"],
        "treatment": ["No chemical treatment needed", "Continue standard berry bed management"]
    },
    "Tomato___Bacterial_spot": {
        "crop": "Tomato",
        "condition": "Bacterial Spot",
        "is_healthy": False,
        "pathogen": "Xanthomonas perforans (Bacterium)",
        "symptoms": [
            "Small, angular, greasy or water-soaked black spots on leaves (1-3 mm)",
            "Spots cluster along leaf margins and tips where water droplets collect",
            "Raised black scab-like pustules with halos on green tomato fruit"
        ],
        "prevention": [
            "Never enter tomato rows when plants are wet with dew or rain",
            "Disinfect pruning shears, stakes, and trellising wires with 10% bleach solution",
            "Use certified disease-free seed or hot-water treated seed"
        ],
        "treatment": [
            "Spray copper hydroxide tank-mixed with mancozeb for improved bactericidal efficacy",
            "Apply Actigard at 7-10 day intervals to stimulate plant defense",
            "Utilize bacteriophage foliar sprays (AgriPhage)"
        ]
    },
    "Tomato___Early_blight": {
        "crop": "Tomato",
        "condition": "Early Blight",
        "is_healthy": False,
        "pathogen": "Alternaria solani / A. linariae (Fungus)",
        "symptoms": [
            "Brown to black circular spots with distinctive concentric 'target rings' or bullseye appearance",
            "Lesions surrounded by a prominent yellow chlorotic halo",
            "Defoliation starts from oldest lower leaves and climbs upward into canopy",
            "Dark leathery sunken lesions on tomato stems and fruit stem-ends"
        ],
        "prevention": [
            "Prune and discard the lowest 30-45 cm of tomato foliage to keep leaves off damp soil",
            "Apply an organic or plastic mulch layer to halt soil-borne spore splashback",
            "Stake and cage tomato vines securely to facilitate rapid morning canopy drying",
            "Practice 3-year crop rotation away from solanaceous plants"
        ],
        "treatment": [
            "Apply protectant fungicides (chlorothalonil, copper, or mancozeb) every 7-10 days once plants flower",
            "If disease is detected, rotate with systemic fungicides (FRAC 7 + 11: Quadris Top or Revus Top)",
            "Maintain uniform spray coverage on bottom leaves where early blight begins"
        ]
    },
    "Tomato___Late_blight": {
        "crop": "Tomato",
        "condition": "Late Blight",
        "is_healthy": False,
        "pathogen": "Phytophthora infestans (Oomycete)",
        "symptoms": [
            "Irregular, expanding water-soaked greasy olive-green to dark brown lesions",
            "Fuzzy white downy mildew sporulation on the underside of leaves during damp mornings",
            "Entire leaf branches and main stems turn black and collapse within 48 to 72 hours"
        ],
        "prevention": [
            "Select resistant tomato varieties carrying Ph-2 and Ph-3 genes",
            "Destroy all volunteer potato and tomato plants around the field",
            "Space plants generously to promote rapid air circulation"
        ],
        "treatment": [
            "Spray preventative protective fungicides before cool rain events",
            "If active blight is confirmed, apply targeted oomycides (mandipropamid or cyazofamid)",
            "Bag and dispose of heavily infected plants immediately; never compost"
        ]
    },
    "Tomato___Leaf_Mold": {
        "crop": "Tomato",
        "condition": "Leaf Mold",
        "is_healthy": False,
        "pathogen": "Passalora fulva (Fungus)",
        "symptoms": [
            "Pale green to pale yellow spots with indistinct margins on upper leaf surface",
            "Olive-green to velvety brown dense fungal mold covering underside of same spots",
            "Primarily occurs in high tunnels and unventilated greenhouses"
        ],
        "prevention": [
            "Keep greenhouse relative humidity strictly below 85% through heating and ventilation",
            "Select tomato varieties possessing Cf resistance genes",
            "Space plants wider and prune suckers"
        ],
        "treatment": [
            "Apply protective copper or chlorothalonil sprays upon first signs",
            "Use approved bio-fungicides (Bacillus amyloliquefaciens) in commercial greenhouses"
        ]
    },
    "Tomato___Septoria_leaf_spot": {
        "crop": "Tomato",
        "condition": "Septoria Leaf Spot",
        "is_healthy": False,
        "pathogen": "Septoria lycopersici (Fungus)",
        "symptoms": [
            "Numerous tiny circular spots (1.5 to 3 mm) with dark brown margins and sunken grayish-white centers",
            "Tiny black pepper-like pycnidia clearly visible inside gray spot centers",
            "Infected leaves rapidly turn yellow, wither, and drop"
        ],
        "prevention": [
            "Pinch off infected lower leaves as soon as first spots appear at bottom of plant",
            "Apply thick layer of clean straw or weed barrier fabric to prevent rain-splash",
            "Water exclusively at soil level using drip irrigation"
        ],
        "treatment": [
            "Apply protectant fungicides (copper fungicide, chlorothalonil, or mancozeb) on a 7-14 day schedule",
            "Ensure spray reaches undersides of bottom leaves"
        ]
    },
    "Tomato___Spider_mites Two-spotted_spider_mite": {
        "crop": "Tomato",
        "condition": "Two-Spotted Spider Mite",
        "is_healthy": False,
        "pathogen": "Tetranychus urticae (Arachnid Pest)",
        "symptoms": [
            "Fine yellow-white stippling or flecking across upper leaf surface from cell sap extraction",
            "Silken webbing on undersides of leaves and growing tips",
            "Leaves turn bronze, dry out, and take on a burned or scorched appearance"
        ],
        "prevention": [
            "Release predatory mites (Phytoseiulus persimilis) early before populations explode",
            "Maintain humidity in greenhouses; mites proliferate in dry dusty conditions",
            "Avoid broad-spectrum pyrethroids which kill beneficial predatory insects"
        ],
        "treatment": [
            "Apply insecticidal soap, 1% horticultural oil, or neem oil spray with complete coverage under leaves",
            "For severe agricultural infestations, apply selective miticides (bifenazate or spiromesifen)"
        ]
    },
    "Tomato___Target_Spot": {
        "crop": "Tomato",
        "condition": "Target Spot",
        "is_healthy": False,
        "pathogen": "Corynespora cassiicola (Fungus)",
        "symptoms": [
            "Pinpoint brown lesions that expand to 4-10 mm with pale brown centers and dark concentric rings",
            "Lesions lack the prominent yellow halo seen in early blight",
            "Circular sunken brown lesions on tomato fruit"
        ],
        "prevention": [
            "Prune dense foliage to promote airflow and speed leaf drying",
            "Rotate with non-host crops (corn, brassicas) for at least 2 seasons"
        ],
        "treatment": [
            "Apply protectant fungicides (chlorothalonil, mancozeb) starting before disease onset",
            "Rotate with strobilurin or carboxamide fungicides if disease develops"
        ]
    },
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        "crop": "Tomato",
        "condition": "Tomato Yellow Leaf Curl Virus (TYLCV)",
        "is_healthy": False,
        "pathogen": "Begomovirus (transmitted by Bemisia tabaci whiteflies)",
        "symptoms": [
            "Severe upward curling and cupping of leaflets ('spoon-like')",
            "Prominent marginal and interveinal chlorosis (yellowing) on youngest leaves",
            "Stunted bushy plant growth with shortened internodes ('bonsai' appearance)",
            "Flower abortion and severe reduction in fruit set"
        ],
        "prevention": [
            "Plant TYLCV-resistant tomato hybrids (e.g. Tygress, Charger)",
            "Install 50-mesh insect exclusion netting in nursery and greenhouse vents",
            "Use yellow sticky traps to scout whitefly populations weekly",
            "Apply UV-reflective silver plastic mulch to disorient incoming whiteflies"
        ],
        "treatment": [
            "Viruses cannot be cured once inside the plant; management relies strictly on vector control and resistant varieties",
            "Apply systemic insecticides or insect growth regulators to control whitefly populations"
        ]
    },
    "Tomato___Tomato_mosaic_virus": {
        "crop": "Tomato",
        "condition": "Tomato Mosaic Virus (ToMV)",
        "is_healthy": False,
        "pathogen": "Tomato Mosaic Tobamovirus (mechanically transmitted)",
        "symptoms": [
            "Light and dark green mottled 'mosaic' pattern on leaves",
            "Leaf distortion, curling, and fern-like narrowing ('shoestring' appearance)",
            "Stunted overall plant growth and uneven fruit ripening with internal brown rings"
        ],
        "prevention": [
            "Wash hands thoroughly with soap or skim milk before handling tomato plants",
            "Smokers must never handle plants without disinfecting hands",
            "Dip pruning tools in non-fat dry milk solution (20%) or trisodium phosphate between plants"
        ],
        "treatment": [
            "There is no cure or chemical spray for viral plant infections",
            "Focus entirely on strict mechanical sanitation, hand hygiene, and resistant cultivars"
        ]
    },
    "Tomato___healthy": {
        "crop": "Tomato",
        "condition": "Healthy Foliage",
        "is_healthy": True,
        "pathogen": "None (Plant is healthy)",
        "symptoms": [
            "Rich deep green compound leaves with crisp serrated edges",
            "Turgid foliage free from target rings, yellow mosaic, or bacterial pustules",
            "Vigorous stem growth with healthy yellow flowering clusters"
        ],
        "prevention": [
            "Maintain consistent soil moisture through drip irrigation to prevent blossom end rot",
            "Mulch soil around plants to protect from future soil-borne fungal spores",
            "Prune lower suckers to maintain canopy ventilation"
        ],
        "treatment": [
            "No chemical fungicides or bactericides required",
            "Log routine scouting observation in farm records"
        ]
    }
}

DISCLAIMER_TEXT = (
    "This application provides machine learning-based predictions for educational "
    "and preliminary screening purposes. Model predictions may be incorrect and are "
    "not a substitute for professional agricultural diagnosis. Confirm suspected diseases "
    "with a qualified agricultural expert or university extension specialist before "
    "taking treatment decisions."
)
