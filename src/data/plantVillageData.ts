import { DiseaseClassInfo } from '../types';

export const PLANT_VILLAGE_CLASSES: string[] = [
  "Apple___Apple_scab",
  "Apple___Black_rot",
  "Apple___Cedar_apple_rust",
  "Apple___healthy",
  "Blueberry___healthy",
  "Cherry_(including_sour)___Powdery_mildew",
  "Cherry_(including_sour)___healthy",
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
  "Corn_(maize)___Common_rust_",
  "Corn_(maize)___Northern_Leaf_Blight",
  "Corn_(maize)___healthy",
  "Grape___Black_rot",
  "Grape___Esca_(Black_Measles)",
  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
  "Grape___healthy",
  "Orange___Haunglongbing_(Citrus_greening)",
  "Peach___Bacterial_spot",
  "Peach___healthy",
  "Pepper,_bell___Bacterial_spot",
  "Pepper,_bell___healthy",
  "Potato___Early_blight",
  "Potato___Late_blight",
  "Potato___healthy",
  "Raspberry___healthy",
  "Soybean___healthy",
  "Squash___Powdery_mildew",
  "Strawberry___Leaf_scorch",
  "Strawberry___healthy",
  "Tomato___Bacterial_spot",
  "Tomato___Early_blight",
  "Tomato___Late_blight",
  "Tomato___Leaf_Mold",
  "Tomato___Septoria_leaf_spot",
  "Tomato___Spider_mites Two-spotted_spider_mite",
  "Tomato___Target_Spot",
  "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
  "Tomato___Tomato_mosaic_virus",
  "Tomato___healthy"
];

export const DISEASE_DATABASE: Record<string, DiseaseClassInfo> = {
  "Apple___Apple_scab": {
    id: "Apple___Apple_scab",
    crop: "Apple",
    condition: "Apple Scab",
    isHealthy: false,
    scientificPathogen: "Venturia inaequalis (Ascomycete fungus)",
    severityLevel: "high",
    symptoms: [
      "Dull olive-green to black velvety spots on leaf surface",
      "Puckered or curled leaves that drop prematurely",
      "Scabby, cracked lesions on mature fruit skin",
      "Reduced tree vigor and photosynthetic efficiency"
    ],
    immediatePrecautions: [
      "Rake and remove infected fallen leaves to break ascospore overwintering cycle",
      "Prune overcrowded inner branches to facilitate leaf canopy air circulation",
      "Avoid overhead sprinkler irrigation that keeps leaves wet for over 9 hours"
    ],
    preventivePractices: [
      "Select scab-resistant cultivars such as Liberty, Enterprise, or Prima",
      "Apply protective copper or bio-fungicide sprays at early green tip stage",
      "Maintain a 10-14 day protective spray interval during rainy spring flushes"
    ],
    treatmentGuidance: [
      "Apply approved organic sulfur or potassium bicarbonate at first spore release",
      "In commercial orchards, apply targeted demethylation inhibitor (DMI) or strobilurin fungicides according to local agricultural extension schedules",
      "Ensure thorough spray coverage on both adaxial and abaxial leaf surfaces"
    ],
    riskFactors: ["Prolonged leaf wetness (>9 hours)", "Moderate temperatures (16°C to 24°C)", "Dense shade"]
  },

  "Apple___Black_rot": {
    id: "Apple___Black_rot",
    crop: "Apple",
    condition: "Black Rot (Frogeye Leaf Spot)",
    isHealthy: false,
    scientificPathogen: "Botryosphaeria obtusa (Fungus)",
    severityLevel: "high",
    symptoms: [
      "Small purple flecks that enlarge into circular lesions with light brown centers ('frogeye')",
      "Dark concentric fungal rings inside mature leaf spots",
      "Firm, rotting dark brown fruit mummies hanging on branches",
      "Cankers on twigs and bark with sunken margins"
    ],
    immediatePrecautions: [
      "Prune and burn infected cankered limbs at least 15 cm below visible lesions",
      "Remove and destroy mummified fruit left on trees from previous seasons",
      "Disinfect pruning shears with 70% isopropyl alcohol between cuts"
    ],
    preventivePractices: [
      "Maintain tree vigor through balanced soil nutrition and regular soil testing",
      "Minimize mechanical bark injuries during harvesting and mowing",
      "Ensure open pruning canopy allowing direct sunlight penetration"
    ],
    treatmentGuidance: [
      "Apply captan or thiophanate-methyl based protective sprays starting at silver tip through second cover",
      "Coordinate with local agronomic advisory for seasonal fungicide timings",
      "Use sanitation as the primary line of defense"
    ],
    riskFactors: ["Stressed or wounded trees", "Humid warm weather (20°C to 27°C)", "Presence of old fruit mummies"]
  },

  "Apple___Cedar_apple_rust": {
    id: "Apple___Cedar_apple_rust",
    crop: "Apple",
    condition: "Cedar Apple Rust",
    isHealthy: false,
    scientificPathogen: "Gymnosporangium juniperi-virginianae (Heteroecious Rust Fungus)",
    severityLevel: "moderate",
    symptoms: [
      "Bright yellow-orange or reddish spots on upper leaf surface",
      "Raised black speck-like pycnia appearing inside spots",
      "Tube-like aecial structures protruding from leaf undersides in late summer",
      "Premature defoliation in severe untreated infections"
    ],
    immediatePrecautions: [
      "Inspect nearby Eastern red cedar or juniper trees for gelatinous orange galls",
      "Remove nearby alternative juniper hosts within 1-2 km if feasible",
      "Collect and dispose of heavily spotted leaves"
    ],
    preventivePractices: [
      "Plant rust-resistant apple varieties (e.g. Honeycrisp, Freedom, Redfree)",
      "Monitor weather for spring rain events coinciding with juniper gall sporulation",
      "Apply protective barrier sprays during pink bud through petal fall"
    ],
    treatmentGuidance: [
      "Apply myclobutanil or mancozeb based protective fungicides before rainy spore flight periods",
      "Target applications during early bloom when teliospores are active on junipers"
    ],
    riskFactors: ["Proximity to Juniperus virginiana", "Spring rains accompanied by temperatures around 10°C to 24°C"]
  },

  "Apple___healthy": {
    id: "Apple___healthy",
    crop: "Apple",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Uniform deep green coloration across leaf lamina",
      "Intact leaf margins free of lesions, necrosis, or chlorotic halos",
      "Supple leaf texture with regular vascular venation",
      "No fungal powdery patches or insect webbing"
    ],
    immediatePrecautions: [
      "Continue standard orchard scouting routine every 7 days",
      "Maintain calibrated drip or furrow irrigation avoiding canopy soaking",
      "Ensure proper balanced nitrogen-potassium soil fertilization"
    ],
    preventivePractices: [
      "Annual dormant oil wash to manage overwintering mite and aphid eggs",
      "Routine pruning to sustain optimal air movement and photosynthetic sunlight exposure",
      "Mulch around root drip-line to preserve soil microbiome and moisture balance"
    ],
    treatmentGuidance: [
      "No chemical treatment required",
      "Log visual inspection in farm health registry"
    ]
  },

  "Blueberry___healthy": {
    id: "Blueberry___healthy",
    crop: "Blueberry",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Glossy, leather-like leaves with vivid dark green pigmentation",
      "No anthracnose lesions, iron chlorosis, or bacterial scorch",
      "Vigorous shoot extension and firm petiole attachment"
    ],
    immediatePrecautions: [
      "Maintain acidic soil pH between 4.5 and 5.2",
      "Ensure consistent pine bark mulching to retain root moisture",
      "Check irrigation water electrical conductivity (EC)"
    ],
    preventivePractices: [
      "Scout for blueberry maggot or botrytis gray mold during bloom",
      "Apply balanced acid-forming fertilizers (ammonium sulfate)",
      "Prune older canes over 6 years to promote young vegetative renewal"
    ],
    treatmentGuidance: [
      "No corrective treatment needed",
      "Sustain routine soil and canopy monitoring"
    ]
  },

  "Cherry_(including_sour)___Powdery_mildew": {
    id: "Cherry_(including_sour)___Powdery_mildew",
    crop: "Cherry",
    condition: "Powdery Mildew",
    isHealthy: false,
    scientificPathogen: "Podosphaera clandestina (Erysiphales Fungus)",
    severityLevel: "moderate",
    symptoms: [
      "White talcum powder-like fungal patches on leaf surface and shoots",
      "Curling, blistering, and upward rolling of tender young foliage",
      "Stunted vegetative terminal shoots and premature leaf drop",
      "Superficial webbing on young cherry fruit"
    ],
    immediatePrecautions: [
      "Prune out severely infected water-sprouts and dense canopy growth",
      "Avoid excess nitrogen fertilizer which stimulates vulnerable tender tissue",
      "Increase air circulation within the tree frame"
    ],
    preventivePractices: [
      "Apply protective horticultural oil or wettable sulfur before bloom",
      "Scout lower inner foliage where humidity remains higher",
      "Utilize drip irrigation rather than overhead sprinklers"
    ],
    treatmentGuidance: [
      "Spray potassium bicarbonate or neem-based biorationals upon initial spot appearance",
      "Rotate FRAC group 3 (DMIs) and group 11 (QoIs) fungicides to forestall resistance",
      "Adhere strictly to pre-harvest intervals (PHI)"
    ],
    riskFactors: ["High relative humidity (over 70%)", "Warm dry days with humid nights (15°C to 28°C)", "Dense shade"]
  },

  "Cherry_(including_sour)___healthy": {
    id: "Cherry_(including_sour)___healthy",
    crop: "Cherry",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Firm, emerald leaves with serrated margins intact",
      "Normal venation with no yellow mottle or necrotic shotholes",
      "Vigorous spur formation"
    ],
    immediatePrecautions: [
      "Maintain clean orchard floor and good weed suppression",
      "Monitor for cherry fruit fly and bacterial canker following spring pruning"
    ],
    preventivePractices: [
      "Perform summer pruning in dry weather to minimize Pseudomonas syringae entry",
      "Apply copper bactericide during autumn leaf fall"
    ],
    treatmentGuidance: [
      "No chemical fungicides necessary",
      "Maintain routine agricultural management"
    ]
  },

  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
    id: "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
    crop: "Corn (Maize)",
    condition: "Gray Leaf Spot",
    isHealthy: false,
    scientificPathogen: "Cercospora zeae-maydis (Fungus)",
    severityLevel: "high",
    symptoms: [
      "Narrow rectangular lesions strictly restricted by parallel leaf veins",
      "Tan to gray necrotic spots expanding to 2-7 cm in length",
      "Coalescence of lesions causing extensive blighting of canopy leaves",
      "Premature stalk lodging and reduced grain fill weight"
    ],
    immediatePrecautions: [
      "Check threshold: if lesions reach ear leaf before or at silking stage, evaluate immediate spray intervention",
      "Avoid field traffic through wet corn rows to prevent spore dissemination"
    ],
    preventivePractices: [
      "Rotate non-host crops (soybeans, alfalfa) for at least 1-2 seasons",
      "Select high-rated hybrid corn varieties with GLS genetic tolerance",
      "Till infected residue under in high-risk continuous-corn systems"
    ],
    treatmentGuidance: [
      "Apply strobilurin (QoI) or triazole (DMI) based foliar fungicides at VT-R1 (tasseling to silking)",
      "Follow local university extension IPM thresholds before spraying"
    ],
    riskFactors: ["Conservation tillage with high corn stubble", "Warm humid weather (>27°C)", "Extended dew periods"]
  },

  "Corn_(maize)___Common_rust_": {
    id: "Corn_(maize)___Common_rust_",
    crop: "Corn (Maize)",
    condition: "Common Rust",
    isHealthy: false,
    scientificPathogen: "Puccinia sorghi (Basidiomycete Fungus)",
    severityLevel: "moderate",
    symptoms: [
      "Small, powdery cinnamon-brown to dark-red pustules on both leaf surfaces",
      "Pustules rupture the leaf epidermis revealing powdery urediniospores",
      "Lesions clustered in bands across the leaf where dew collected",
      "Chlorosis and premature death of heavily infected leaves"
    ],
    immediatePrecautions: [
      "Scout upper canopy leaves during early vegetative to pollination stages",
      "Assess rust pustule percentage on leaves above the primary ear leaf"
    ],
    preventivePractices: [
      "Plant rust-resistant corn hybrids bearing Rp1 resistance genes",
      "Plant early in the season to evade southward windblown spore arrivals"
    ],
    treatmentGuidance: [
      "Fungicide treatment is generally recommended only if rust pustules cover >5% of leaves prior to dent stage (R5)",
      "Triazole fungicides (e.g. propiconazole) provide effective therapeutic suppression when applied early"
    ],
    riskFactors: ["Cool to moderate temperatures (16°C to 24°C)", "High relative humidity (>95%)", "Frequent night fogs"]
  },

  "Corn_(maize)___Northern_Leaf_Blight": {
    id: "Corn_(maize)___Northern_Leaf_Blight",
    crop: "Corn (Maize)",
    condition: "Northern Leaf Blight (NLB)",
    isHealthy: false,
    scientificPathogen: "Setosphaeria turcica / Exserohilum turcicum (Fungus)",
    severityLevel: "high",
    symptoms: [
      "Long, elliptical, cigar-shaped grayish-green to tan lesions (2 to 15 cm)",
      "Dark olive velvety fungal sporulation inside lesions under humid conditions",
      "Lesions begin on lower canopy and progress rapidly upward",
      "Extensive leaf desiccation making foliage appear frost-damaged"
    ],
    immediatePrecautions: [
      "Scout field at V8 through tasseling; check lowest three leaves for cigar-shaped blights",
      "Do not combine overhead fertigation with prolonged evening leaf wetness"
    ],
    preventivePractices: [
      "Select corn hybrids containing Ht-resistance genes (Ht1, Ht2, Ht3, or HtN)",
      "Implement minimum two-year crop rotation with non-gramineous crops",
      "Bury or chop crop debris post-harvest to speed microbial breakdown"
    ],
    treatmentGuidance: [
      "Apply protective foliar fungicides (pyraclostrobin, azoxystrobin + difenoconazole) at silking if disease pressure threatens ear leaves",
      "Calibrate tractor spray boom pressure for deep canopy penetration"
    ],
    riskFactors: ["Extended leaf wetness (6-18 hours)", "Temperatures between 18°C and 27°C", "Continuous corn cropping"]
  },

  "Corn_(maize)___healthy": {
    id: "Corn_(maize)___healthy",
    crop: "Corn (Maize)",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Robust lanceolate green leaves with strong central midrib",
      "No necrotic banding, rust pustules, or chlorotic streaks",
      "Clean margins with healthy turgor pressure"
    ],
    immediatePrecautions: [
      "Continue side-dress nitrogen management based on crop growth stage",
      "Scout weekly for European corn borer and armyworm damage"
    ],
    preventivePractices: [
      "Maintain adequate potassium and phosphorus levels for stalk strength",
      "Ensure proper plant population spacing to balance yield and air flow"
    ],
    treatmentGuidance: [
      "No curative action needed",
      "Record field stage (e.g. V6, VT, R2) for growth tracking"
    ]
  },

  "Grape___Black_rot": {
    id: "Grape___Black_rot",
    crop: "Grape",
    condition: "Black Rot",
    isHealthy: false,
    scientificPathogen: "Guignardia bidwellii (Fungus)",
    severityLevel: "critical",
    symptoms: [
      "Circular reddish-brown leaf spots with dark brown margins and tiny black pycnidia speckles",
      "Infected berries turn pale, shrivel rapidly, and turn into hard black wrinkled mummies",
      "Sunken purple-black cankers on green shoots and tendrils"
    ],
    immediatePrecautions: [
      "Prune and destroy all mummified grape clusters clinging to the vine or trellis wire",
      "Open grape canopy through shoot thinning and selective leaf pulling around fruit zones"
    ],
    preventivePractices: [
      "Begin protective fungicide sprays at 2 to 3-inch shoot growth",
      "Critical protection window: from immediate pre-bloom to 4-5 weeks post-bloom",
      "Maintain clean weed-free strip beneath vine canopy"
    ],
    treatmentGuidance: [
      "Apply myclobutanil, kresoxim-methyl, or tebuconazole during critical infection periods",
      "Organic vineyards use copper hydroxide and sulfur with tight preventative schedules"
    ],
    riskFactors: ["Warm humid weather (22°C to 27°C)", "Rain-driven spore splashes", "Unpruned dense vines"]
  },

  "Grape___Esca_(Black_Measles)": {
    id: "Grape___Esca_(Black_Measles)",
    crop: "Grape",
    condition: "Esca (Black Measles / Trunk Disease)",
    isHealthy: false,
    scientificPathogen: "Complex of Phaeomoniella chlamydospora & Fomitiporia mediterranea",
    severityLevel: "high",
    symptoms: [
      "Interveinal yellow or red chlorosis followed by necrosis ('tiger-stripe' leaf pattern)",
      "Dark brown or purple speckles on berry skins ('measles')",
      "Internal wood cross-section shows dark gummy spots or spongy white rot",
      "Sudden apoplectic summer vine wilting and collapse"
    ],
    immediatePrecautions: [
      "Mark symptomatic vines during summer for delayed winter pruning",
      "Prune infected arms back to healthy green wood showing no vascular discoloration",
      "Coat large pruning cuts with wound sealants containing biocontrols (Trichoderma)"
    ],
    preventivePractices: [
      "Prune late in the dormant season (February-March) when healing is accelerated",
      "Avoid large pruning cuts where rain can wash fungal spores into vascular vessels",
      "Source certified disease-free nursery stock"
    ],
    treatmentGuidance: [
      "No single curative chemical exists once vascular fungi establish in old trunk cordons",
      "Trunk renewal technique: train a sucker cane from below the dead wood to replace the infected vine",
      "Maintain vine hydration to lower apoplexy risk"
    ],
    riskFactors: ["Vines older than 8-10 years", "Heavy mechanical pruning wounds", "Drought stress followed by heat spikes"]
  },

  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
    id: "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    crop: "Grape",
    condition: "Leaf Blight (Isariopsis Leaf Spot)",
    isHealthy: false,
    scientificPathogen: "Pseudocercospora vitis / Isariopsis clavispora (Fungus)",
    severityLevel: "moderate",
    symptoms: [
      "Irregular brown angular necrotic patches delimited by minor leaf veins",
      "Dark velvety fungal sporulation on lower leaf surface during high humidity",
      "Premature leaf yellowing, browning, and defoliation in late summer",
      "Reduced sugar accumulation and delayed berry ripening"
    ],
    immediatePrecautions: [
      "Prune excess lateral shoots to ensure good sunlight penetration through foliage",
      "Rake fallen leaves after autumn harvest to lower overwintering inocula"
    ],
    preventivePractices: [
      "Include broad-spectrum protectants (copper or dithiocarbamates) in post-bloom schedule",
      "Maintain adequate trellis canopy management"
    ],
    treatmentGuidance: [
      "Apply copper oxychloride or azoxystrobin spray when lesions first appear in late season",
      "Ensure bottom-to-top canopy spray penetration"
    ],
    riskFactors: ["Late summer high humidity", "Overgrown unpruned vine canopy", "Warm temperatures (24°C to 30°C)"]
  },

  "Grape___healthy": {
    id: "Grape___healthy",
    crop: "Grape",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Vibrant green palmate leaves with sharp margins",
      "Uniform chlorophyll distribution and clear translucent veins",
      "Balanced vine shoot vigor and healthy fruit clusters"
    ],
    immediatePrecautions: [
      "Continue standard shoot positioning and canopy hedging",
      "Monitor vine moisture stress via leaf water potential or soil sensors"
    ],
    preventivePractices: [
      "Maintain preventive powdery and downy mildew scouting every 7 days",
      "Maintain good weed control under vine trellises"
    ],
    treatmentGuidance: [
      "No chemical treatment required",
      "Document canopy development stage (Eichhorn-Lorenz stage)"
    ]
  },

  "Orange___Haunglongbing_(Citrus_greening)": {
    id: "Orange___Haunglongbing_(Citrus_greening)",
    crop: "Orange (Citrus)",
    condition: "Huanglongbing (HLB / Citrus Greening)",
    isHealthy: false,
    scientificPathogen: "Candidatus Liberibacter asiaticus (Fastidious Bacterium transmitted by Diaphorina citri)",
    severityLevel: "critical",
    symptoms: [
      "Asymmetric blotchy mottled chlorosis across leaf midrib (unlike symmetric zinc deficiency)",
      "Thickened, corky, or raised yellow leaf veins",
      "Twig dieback, stunted tree canopy, and yellow shoots ('yellow dragon')",
      "Lopsided, small fruit that remains green at the blossom end with bitter taste"
    ],
    immediatePrecautions: [
      "Inspect tree for Asian Citrus Psyllid (ACP) nymphs and waxy secretions on young flushes",
      "Quarantine the grove and alert regional horticultural authorities immediately",
      "Do not move infected plant budwood or cuttings"
    ],
    preventivePractices: [
      "Strict control of Asian Citrus Psyllid vector using systemic neonicotinoids or targeted IPM biocontrol (Tamarixia radiata)",
      "Plant only certified disease-free citrus trees from screened nursery facilities",
      "Nutritional foliar therapy (zinc, manganese, potassium) to prolong productive life"
    ],
    treatmentGuidance: [
      "HLB has no cure once trees are systemically infected; eradication of symptomatic trees is standard regulatory protocol in non-endemic zones",
      "Maintain rigorous psyllid suppression across neighboring orchards"
    ],
    riskFactors: ["Presence of Diaphorina citri vector", "Unscreened citrus rootstock movement", "Subtropical humid climates"]
  },

  "Peach___Bacterial_spot": {
    id: "Peach___Bacterial_spot",
    crop: "Peach",
    condition: "Bacterial Spot",
    isHealthy: false,
    scientificPathogen: "Xanthomonas arboricola pv. pruni (Bacterium)",
    severityLevel: "high",
    symptoms: [
      "Angular water-soaked purple or dark brown lesions on leaves",
      "Centers of lesions drop out creating a distinct 'shothole' appearance",
      "Chlorotic yellowing of leaf tips followed by heavy early leaf drop",
      "Deep pitting, gum exudation, and dark sunken lesions on peach fruit skin"
    ],
    immediatePrecautions: [
      "Avoid overhead sprinkler irrigation that splashes bacteria between branches",
      "Do not prune trees when foliage is wet from rain or dew",
      "Disinfect pruning shears regularly"
    ],
    preventivePractices: [
      "Plant bacterial spot-resistant peach cultivars (e.g. Clayton, Candor, PF-1)",
      "Erect windbreaks to diminish blowing sand that abrasively wounds leaves",
      "Apply dormant and delayed-dormant copper sprays"
    ],
    treatmentGuidance: [
      "Apply low-dose copper bactericide or oxytetracycline sprays starting at shuck split through petal fall",
      "Carefully manage copper rate to avoid phytotoxic foliar burning"
    ],
    riskFactors: ["Sandy soils with wind-driven abrasions", "Warm wet spring weather (21°C to 28°C)", "Prolonged rainfall"]
  },

  "Peach___healthy": {
    id: "Peach___healthy",
    crop: "Peach",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Glossy, lanceolate leaves with smooth finely serrated borders",
      "Rich deep green color without shotholes, curling, or gummy spots",
      "Firm, well-developed stone fruit growth"
    ],
    immediatePrecautions: [
      "Continue monitoring for peach tree borer and oriental fruit moth",
      "Maintain clean orchard floor to facilitate air flow"
    ],
    preventivePractices: [
      "Apply dormant fungicide spray (chlorothalonil or copper) in late autumn to prevent peach leaf curl (Taphrina deformans)",
      "Maintain soil moisture through scheduled trickle irrigation"
    ],
    treatmentGuidance: [
      "No chemical treatment required",
      "Continue routine orchard maintenance"
    ]
  },

  "Pepper,_bell___Bacterial_spot": {
    id: "Pepper,_bell___Bacterial_spot",
    crop: "Bell Pepper",
    condition: "Bacterial Spot",
    isHealthy: false,
    scientificPathogen: "Xanthomonas euvesicatoria / X. perforans (Bacterium)",
    severityLevel: "high",
    symptoms: [
      "Small circular to irregular water-soaked spots on leaves that turn dark brown",
      "Lesions surrounded by a narrow yellow halo, often prominent on abaxial surface",
      "Severe blighting and extensive premature leaf shedding leaving fruit exposed to sunscald",
      "Raised warty scab-like spots on immature bell pepper fruit"
    ],
    immediatePrecautions: [
      "Do not work in fields when plants are wet to prevent bacterial spreading on clothing and equipment",
      "Rogue out and destroy severely diseased seedlings in nursery trays",
      "Switch immediately to drip irrigation"
    ],
    preventivePractices: [
      "Purchase hot-water treated or certified disease-free pepper seeds",
      "Choose bell pepper varieties with genetic resistance (Xcv 1-10 races)",
      "Rotate with non-solanaceous crops (sweet corn, brassicas) for minimum 2 years"
    ],
    treatmentGuidance: [
      "Apply preventive copper hydroxide combined with mancozeb for synergistic bactericidal activity",
      "Incorporate Actigard (acibenzolar-S-methyl) for plant systemic acquired resistance (SAR)",
      "Use biologicals like Bacillus subtilis or bacteriophages early in vegetative cycles"
    ],
    riskFactors: ["High temperatures (24°C to 30°C) with heavy rainstorms", "Overhead irrigation", "Contaminated transplant flats"]
  },

  "Pepper,_bell___healthy": {
    id: "Pepper,_bell___healthy",
    crop: "Bell Pepper",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Broad, vibrant green leaves with smooth intact margins",
      "No necrotic spotting, mosaic mottling, or wilt symptoms",
      "Vigorous branching with healthy floral buds and fruit set"
    ],
    immediatePrecautions: [
      "Maintain consistent soil moisture to prevent blossom end rot",
      "Scout for aphid vectors and thrips on young growing tips"
    ],
    preventivePractices: [
      "Use reflective silver plastic mulch to deter thrips and aphids",
      "Ensure proper calcium and magnesium nutrition through fertigation"
    ],
    treatmentGuidance: [
      "No therapeutic chemicals needed",
      "Log monitoring data into crop register"
    ]
  },

  "Potato___Early_blight": {
    id: "Potato___Early_blight",
    crop: "Potato",
    condition: "Early Blight",
    isHealthy: false,
    scientificPathogen: "Alternaria solani (Fungus)",
    severityLevel: "high",
    symptoms: [
      "Dark brown to black lesions showing distinctive 'target-board' concentric concentric rings",
      "Lesions initially emerge on older lower canopy leaves",
      "Chlorotic yellow margin encircling each lesion as fungal toxins diffuse",
      "Leaves become leathery, curl upward, and die prematurely"
    ],
    immediatePrecautions: [
      "Prune or remove severely blighted lower leaves if localized",
      "Avoid sprinkler irrigation in late afternoon; ensure foliage dries before dusk",
      "Ensure balanced nitrogen fertilization; nitrogen-deficient plants are highly susceptible"
    ],
    preventivePractices: [
      "Follow a 3-year crop rotation avoiding other Solanaceae (tomatoes, peppers, eggplants)",
      "Plant certified disease-free seed tubers with high physiological age",
      "Maintain adequate soil moisture to reduce drought-induced plant stress"
    ],
    treatmentGuidance: [
      "Initiate protective fungicide sprays (chlorothalonil, mancozeb) when rows close",
      "Rotate with curative options such as azoxystrobin, difenoconazole, or boscalid",
      "Follow degree-day forecast models (P-Days) for precise spray timing"
    ],
    riskFactors: ["Alternating wet and dry weather cycles", "Temperatures around 24°C to 29°C", "Plant senescence and nitrogen depletion"]
  },

  "Potato___Late_blight": {
    id: "Potato___Late_blight",
    crop: "Potato",
    condition: "Late Blight",
    isHealthy: false,
    scientificPathogen: "Phytophthora infestans (Oomycete / Water Mold)",
    severityLevel: "critical",
    symptoms: [
      "Water-soaked dark green to purplish-black expanding lesions that do not respect leaf veins",
      "White delicate cottony spore mold visible on underside of leaf during humid mornings",
      "Rapid systemic collapse of canopy within days, producing a foul rotting odor",
      "Brown to purplish rot developing in potato tubers under the skin"
    ],
    immediatePrecautions: [
      "Act immediately: this is the historic Irish potato famine pathogen capable of destroying fields in 72 hours",
      "Destroy and bag isolated infected plants; do not compost",
      "Alert neighboring growers and extension agents to trigger regional advisory"
    ],
    preventivePractices: [
      "Never plant volunteer potatoes or seed tubers showing brown dry rot",
      "Eliminate cull piles where Phytophthora overwinters",
      "Select resistant potato varieties (e.g. Defender, Sarpo Mira)"
    ],
    treatmentGuidance: [
      "Apply protective contact fungicides (mancozeb, chlorothalonil) before disease outbreak",
      "If active lesions appear, spray targeted oomycete fungicides: cyazofamid, fluopicolide, or mandipropamid",
      "Desiccate vines with diquat or glufosinate 2-3 weeks prior to tuber harvest to prevent tuber inoculation"
    ],
    riskFactors: ["Cool wet weather (10°C to 20°C)", "Prolonged leaf wetness (>10 hours)", "Fog and cloud cover"]
  },

  "Potato___healthy": {
    id: "Potato___healthy",
    crop: "Potato",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Lush compound pinnate leaves with vivid green pigmentation",
      "Crisp foliage free from chlorosis, mosaic veins, or water-soaked blight",
      "Strong erect stems with abundant floral blossoms"
    ],
    immediatePrecautions: [
      "Maintain proper hilling to protect developing tubers from sun greening and blight spores",
      "Scout for Colorado potato beetle larvae on leaf undersides"
    ],
    preventivePractices: [
      "Ensure disciplined drip fertigation schedule",
      "Keep field border clear of solanaceous weeds (nightshade)"
    ],
    treatmentGuidance: [
      "No chemical application required",
      "Continue routine crop development tracking"
    ]
  },

  "Raspberry___healthy": {
    id: "Raspberry___healthy",
    crop: "Raspberry",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Compound leaves with crisp serrated leaflets and silvery-green undersides",
      "Free of anthracnose gray spots, spur blight lesions, or viral mottling",
      "Vigorous primocane vegetative growth"
    ],
    immediatePrecautions: [
      "Keep cane rows narrow (40-60 cm) to maximize air movement and light",
      "Trellis canes properly to prevent lodging in wind"
    ],
    preventivePractices: [
      "Prune out spent floricanes immediately following summer harvest",
      "Drip irrigate at soil level to prevent wetting the dense cane canopy"
    ],
    treatmentGuidance: [
      "No chemical action needed",
      "Maintain standard raspberry trellis management"
    ]
  },

  "Soybean___healthy": {
    id: "Soybean___healthy",
    crop: "Soybean",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Trifoliate leaves with deep green uniform color and velvety pubescence",
      "No frogeye leaf spots, septoria brown spots, or sudden death syndrome interveinal necrosis",
      "Healthy nodulation on root systems indicating active nitrogen fixation"
    ],
    immediatePrecautions: [
      "Monitor canopy closure and soil moisture levels during reproductive flowering (R1-R3)",
      "Scout for soybean aphids and stink bugs"
    ],
    preventivePractices: [
      "Maintain crop rotation with corn or small grains",
      "Select varieties with genetic resistance to Phytophthora root rot and Soybean Cyst Nematode (SCN)"
    ],
    treatmentGuidance: [
      "No pesticide intervention required",
      "Track growth stages for accurate record keeping"
    ]
  },

  "Squash___Powdery_mildew": {
    id: "Squash___Powdery_mildew",
    crop: "Squash / Cucurbits",
    condition: "Powdery Mildew",
    isHealthy: false,
    scientificPathogen: "Podosphaera xanthii / Golovinomyces cichoracearum (Fungus)",
    severityLevel: "high",
    symptoms: [
      "White talc-like powdery fungal spots expanding on both upper and lower leaf surfaces",
      "Leaves turn yellow, brown, and become brittle and dry ('paper-like')",
      "Premature leaf senescence leading to fruit sunscald, reduced yield, and poor sugar content",
      "Fungal growth also colonizes petioles and main plant vines"
    ],
    immediatePrecautions: [
      "Remove heavily coated older leaves near plant base to slow upward progression",
      "Space plants generously to promote rapid foliar drying",
      "Avoid excessive nitrogen fertilization that fuels succulent susceptible growth"
    ],
    preventivePractices: [
      "Plant squash cultivars bred with powdery mildew resistance (PMR varieties)",
      "Apply potassium silicate or sulfur-based preventatives early in crop cycle"
    ],
    treatmentGuidance: [
      "Spray potassium bicarbonate (e.g. Armicarb) or horticultural mineral oils at first sign",
      "Rotate fungicides across FRAC groups: Quintec (group 13), Torino (group U06), or Luna Sensation (group 7/11) to avoid resistance",
      "Ensure spray coverage reaches both leaf surfaces"
    ],
    riskFactors: ["Warm dry days (20°C to 27°C) with humid dewy nights", "Dense shaded canopies", "Low light conditions"]
  },

  "Strawberry___Leaf_scorch": {
    id: "Strawberry___Leaf_scorch",
    crop: "Strawberry",
    condition: "Leaf Scorch",
    isHealthy: false,
    scientificPathogen: "Diplocarpon earlianum (Fungus)",
    severityLevel: "moderate",
    symptoms: [
      "Numerous small, irregular purple to dark purplish-brown blotches on upper leaf surface",
      "Lesions do not develop white or gray centers, distinguishing them from common leaf spot",
      "As spots coalesce, entire leaf margins appear scorched and curl upward",
      "In severe cases, calyx (fruit cap) becomes brown and infected, reducing berry marketability"
    ],
    immediatePrecautions: [
      "Remove and destroy badly scorched leaves during post-harvest renovation",
      "Avoid overhead sprinkler irrigation; convert to subterranean or surface drip lines",
      "Do not set runner plants too closely in the row"
    ],
    preventivePractices: [
      "Plant certified pathogen-free strawberry bare-root or plug plants",
      "Choose less susceptible cultivars such as Allstar, Delmarvel, or Honeoye",
      "Renovate June-bearing strawberry beds immediately after harvest"
    ],
    treatmentGuidance: [
      "Apply protective fungicides (captan, thiram) in spring as new growth resumes",
      "Rotate with FRAC 11 (strobilurins) or FRAC 3 (triazoles) if disease pressure is intense"
    ],
    riskFactors: ["Prolonged leaf wetness from frequent rain or sprinklers", "Temperatures between 15°C and 25°C", "Weedy beds"]
  },

  "Strawberry___healthy": {
    id: "Strawberry___healthy",
    crop: "Strawberry",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Glossy trifoliate green leaves with clean saw-toothed margins",
      "Vigorous crown growth free of anthracnose, scorch, or spider mite webbing",
      "Abundant white floral blooms and plump firm fruit caps"
    ],
    immediatePrecautions: [
      "Maintain clean straw or plastic mulch under fruit to prevent soil contact",
      "Scout for two-spotted spider mites and tarnished plant bugs"
    ],
    preventivePractices: [
      "Ensure adequate crown aeration and soil drainage",
      "Maintain balanced potassium and boron nutrition during fruiting"
    ],
    treatmentGuidance: [
      "No chemical treatment needed",
      "Continue standard berry bed management"
    ]
  },

  "Tomato___Bacterial_spot": {
    id: "Tomato___Bacterial_spot",
    crop: "Tomato",
    condition: "Bacterial Spot",
    isHealthy: false,
    scientificPathogen: "Xanthomonas perforans / X. vesicatoria (Bacterium)",
    severityLevel: "high",
    symptoms: [
      "Small, angular, greasy or water-soaked black spots on leaves (1-3 mm)",
      "Spots often cluster along leaf margins and tips where guttation water gathers",
      "Surrounding tissue turns yellow, leading to severe leaf blight and defoliation",
      "Raised black scab-like pustules with halos on green tomato fruit"
    ],
    immediatePrecautions: [
      "Never enter tomato rows when plants are wet with dew or rain",
      "Disinfect pruning shears, stakes, and trellising wires with 10% bleach solution",
      "Rogue out and incinerate infected seedling trays"
    ],
    preventivePractices: [
      "Use certified disease-free seed tested for bacterial spot pathogens",
      "Treat seeds with hot water (50°C for 25 minutes) before planting",
      "Rotate out of solanaceous crops for minimum of 2 years"
    ],
    treatmentGuidance: [
      "Spray copper hydroxide tank-mixed with mancozeb for improved bactericidal efficacy",
      "Apply Actigard (plant defense inducer) at 7-10 day intervals starting early in season",
      "Utilize bacteriophage foliar sprays (AgriPhage) targeting specific Xanthomonas strains"
    ],
    riskFactors: ["Warm rainy weather (24°C to 30°C)", "Overhead irrigation", "Blowing wind and abrasive sand storms"]
  },

  "Tomato___Early_blight": {
    id: "Tomato___Early_blight",
    crop: "Tomato",
    condition: "Early Blight",
    isHealthy: false,
    scientificPathogen: "Alternaria linariae / Alternaria solani (Fungus)",
    severityLevel: "high",
    symptoms: [
      "Brown to black circular spots with distinctive concentric 'target rings' or bullseye appearance",
      "Lesions surrounded by a prominent yellow chlorotic halo",
      "Defoliation starts from oldest lower leaves and climbs upward into canopy",
      "Dark leathery sunken lesions on tomato stems ('collar rot') and near fruit stem-ends"
    ],
    immediatePrecautions: [
      "Prune and discard the lowest 30-45 cm of tomato foliage to keep leaves off damp soil",
      "Apply a 5-8 cm organic or plastic mulch layer to halt soil-borne spore splashback",
      "Avoid wetting leaves during watering; always irrigate directly at the base"
    ],
    preventivePractices: [
      "Plant early blight-resistant tomato cultivars (e.g. Mountain Supreme, Defiant PhR, Iron Lady)",
      "Stake and cage tomato vines securely to facilitate rapid morning canopy drying",
      "Practice 3-year crop rotation away from solanaceous plants"
    ],
    treatmentGuidance: [
      "Apply protectant fungicides (chlorothalonil, copper, or mancozeb) every 7-10 days once plants flower",
      "If disease is detected, rotate with systemic fungicides (FRAC 7 + 11: Quadris Top, Priaxor, or Revus Top)",
      "Maintain uniform spray coverage on bottom leaves where early blight begins"
    ],
    riskFactors: ["Moderate to warm humid weather (24°C to 29°C)", "Prolonged leaf wetness", "Plant stress and heavy fruit load"]
  },

  "Tomato___Late_blight": {
    id: "Tomato___Late_blight",
    crop: "Tomato",
    condition: "Late Blight",
    isHealthy: false,
    scientificPathogen: "Phytophthora infestans (Oomycete Water Mold)",
    severityLevel: "critical",
    symptoms: [
      "Irregular, expanding water-soaked greasy olive-green to dark brown lesions",
      "Fuzzy white downy mildew sporulation on the underside of leaves during damp conditions",
      "Entire leaf branches and main stems turn black and collapse within 48 to 72 hours",
      "Golden-brown, firm, greasy-looking rot on tomato fruits"
    ],
    immediatePrecautions: [
      "Act with urgency: this pathogen can destroy an entire tomato crop within days and spread for kilometers on wind currents",
      "Bag and pull out heavily infected plants immediately; dispose in sealed garbage bags, never compost",
      "Check regional late blight forecasting models (e.g. BlightCast)"
    ],
    preventivePractices: [
      "Select resistant tomato varieties carrying Ph-2 and Ph-3 genes (e.g. Mountain Magic, Plum Regal)",
      "Destroy all volunteer potato and tomato plants around the garden or farm",
      "Space plants generously to promote rapid air circulation"
    ],
    treatmentGuidance: [
      "Spray preventative protective fungicides (chlorothalonil, copper) before cool rain events",
      "If active blight is confirmed nearby, apply targeted oomycides (Revus / mandipropamid, Ranman / cyazofamid, or Presidio / fluopicolide)",
      "Follow strict pre-harvest intervals and resistance rotation protocols"
    ],
    riskFactors: ["Cool wet weather (15°C to 22°C)", "Relative humidity >90%", "Cloudy overcast days with prolonged morning dew"]
  },

  "Tomato___Leaf_Mold": {
    id: "Tomato___Leaf_Mold",
    crop: "Tomato",
    condition: "Leaf Mold",
    isHealthy: false,
    scientificPathogen: "Passalora fulva / Cladosporium fulvum (Fungus)",
    severityLevel: "moderate",
    symptoms: [
      "Pale green to pale yellow spots with indistinct margins on upper leaf surface",
      "Olive-green to velvety brown dense fungal mold covering underside of same spots",
      "Older leaves turn brown, wither, and drop prematurely",
      "Primarily occurs in high tunnels, greenhouses, and unventilated covered structures"
    ],
    immediatePrecautions: [
      "Increase ventilation immediately: open greenhouse side curtains and run circulating fans",
      "Space plants wider and prune suckers to open internal plant canopy",
      "Avoid splashing water on foliage when irrigating"
    ],
    preventivePractices: [
      "Keep greenhouse relative humidity strictly below 85% through heating and ventilation",
      "Select tomato varieties possessing Cf resistance genes (Cf-2, Cf-4, Cf-9)",
      "Disinfect greenhouse interior, stakes, and trellising between crop cycles"
    ],
    treatmentGuidance: [
      "Apply protective copper or chlorothalonil sprays upon first signs",
      "In commercial greenhouse production, use approved bio-fungicides (Bacillus amyloliquefaciens) or systemic triazoles/strobilurins"
    ],
    riskFactors: ["High relative humidity (>85%)", "Poor greenhouse ventilation", "Temperatures between 21°C and 24°C"]
  },

  "Tomato___Septoria_leaf_spot": {
    id: "Tomato___Septoria_leaf_spot",
    crop: "Tomato",
    condition: "Septoria Leaf Spot",
    isHealthy: false,
    scientificPathogen: "Septoria lycopersici (Fungus)",
    severityLevel: "high",
    symptoms: [
      "Numerous tiny circular spots (1.5 to 3 mm) with dark brown margins and sunken grayish-white centers",
      "Tiny black pepper-like pycnidia (fruiting bodies) clearly visible inside gray spot centers",
      "Infected leaves rapidly turn completely yellow and wither",
      "Progresses steadily from bottom leaves upward, exposing green fruits to intense sunscald"
    ],
    immediatePrecautions: [
      "Pinch off infected lower leaves as soon as first spots appear at bottom of plant",
      "Apply thick layer of clean straw, wood chips, or weed barrier fabric to prevent rain-splash from soil",
      "Water exclusively at soil level using soaker hoses or drip irrigation"
    ],
    preventivePractices: [
      "Practice 3-year crop rotation away from solanaceous plants",
      "Clean up all fallen tomato leaf debris at the conclusion of the growing season",
      "Stake and prune plants to maintain strong upright structure and airflow"
    ],
    treatmentGuidance: [
      "Apply protectant fungicides (copper fungicide, chlorothalonil, or mancozeb) on a 7-14 day schedule",
      "Ensure spray reaches undersides of bottom leaves",
      "Alternate fungicide chemistries to manage resistance"
    ],
    riskFactors: ["Wet humid weather with frequent rain", "Temperatures between 20°C and 25°C", "Lack of soil mulch"]
  },

  "Tomato___Spider_mites Two-spotted_spider_mite": {
    id: "Tomato___Spider_mites Two-spotted_spider_mite",
    crop: "Tomato",
    condition: "Two-Spotted Spider Mite Infestation",
    isHealthy: false,
    scientificPathogen: "Tetranychus urticae (Acari: Tetranychidae pest)",
    severityLevel: "high",
    symptoms: [
      "Fine yellow-white stippling or flecking across upper leaf surface from cell sap extraction",
      "Silken webbing on undersides of leaves, growing tips, and between leaf petioles",
      "Leaves turn bronze, dry out, and take on a burned or scorched appearance",
      "Tiny moving red, yellow, or translucent mites visible with 10x hand lens under leaves"
    ],
    immediatePrecautions: [
      "Hose down plant undersides with strong water spray to knock off mites and disrupt webbing",
      "Isolate or discard heavily webbed individual branches or plants",
      "Avoid broad-spectrum synthetic pyrethroid insecticides which eliminate beneficial predator mites"
    ],
    preventivePractices: [
      "Release predatory mites (Phytoseiulus persimilis or Neoseiulus californicus) early before populations explode",
      "Maintain humidity in greenhouses; spider mites proliferate rapidly in dry dusty conditions",
      "Keep field borders free of dry weeds"
    ],
    treatmentGuidance: [
      "Apply insecticidal soap, 1% horticultural oil, or neem oil spray, ensuring complete abaxial coverage",
      "For severe agricultural infestations, apply selective miticides (bifenazate, spiromesifen, or abamectin)"
    ],
    riskFactors: ["Hot dry weather (>30°C)", "Low relative humidity", "Dusty conditions and overuse of pyrethroids"]
  },

  "Tomato___Target_Spot": {
    id: "Tomato___Target_Spot",
    crop: "Tomato",
    condition: "Target Spot",
    isHealthy: false,
    scientificPathogen: "Corynespora cassiicola (Fungus)",
    severityLevel: "moderate",
    symptoms: [
      "Pinpoint brown lesions that expand to 4-10 mm with pale brown centers and dark concentric rings",
      "Lesions lack the prominent yellow halo seen in early blight",
      "Extensive leaf blighting and severe canopy defoliation under warm humid conditions",
      "Circular sunken brown lesions on tomato fruit with crater-like appearance"
    ],
    immediatePrecautions: [
      "Prune dense foliage to promote airflow and speed leaf drying",
      "Discard culled diseased fruit away from the field",
      "Mulch soil around plants to reduce spore splash"
    ],
    preventivePractices: [
      "Avoid overhead watering; maintain drip irrigation",
      "Rotate with non-host crops (corn, cabbage, grasses) for at least 2 seasons"
    ],
    treatmentGuidance: [
      "Apply protectant fungicides (chlorothalonil, mancozeb) starting before disease onset",
      "If disease develops, rotate with strobilurin or carboxamide fungicides (e.g. pyraclostrobin, boscalid)"
    ],
    riskFactors: ["High humidity (>80%)", "Warm temperatures (20°C to 28°C)", "Dense vegetative canopy"]
  },

  "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
    id: "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    crop: "Tomato",
    condition: "Tomato Yellow Leaf Curl Virus (TYLCV)",
    isHealthy: false,
    scientificPathogen: "Tomato Yellow Leaf Curl Virus (Begomovirus transmitted by Bemisia tabaci whiteflies)",
    severityLevel: "critical",
    symptoms: [
      "Severe upward curling and cupping of leaflets ('spoon-like')",
      "Prominent marginal and interveinal chlorosis (yellowing) on youngest leaves",
      "Stunted bushy plant growth with shortened internodes ('bonsai' appearance)",
      "Flower abortion and severe reduction in fruit set; plants infected early yield zero fruit"
    ],
    immediatePrecautions: [
      "Identify and eradicate whitefly vector (Bemisia tabaci) populations immediately",
      "Rogue out and destroy infected viral plants; place in plastic bags to prevent whiteflies escaping",
      "Do not compost virally infected plant material"
    ],
    preventivePractices: [
      "Plant TYLCV-resistant tomato hybrids (e.g. Tygress, Charger, Invictus)",
      "Install 50-mesh insect exclusion netting in nursery and greenhouse vents",
      "Use yellow sticky traps to scout whitefly populations weekly",
      "Apply UV-reflective silver plastic mulch to disorient incoming whiteflies"
    ],
    treatmentGuidance: [
      "Viruses cannot be cured once inside the plant; management relies strictly on vector control and resistant varieties",
      "Apply systemic insecticides (imidacloprid, thiamethoxam) or insect growth regulators (pyriproxyfen) to control whitefly populations"
    ],
    riskFactors: ["High whitefly populations", "Warm arid/semi-arid climate", "Proximity to infected volunteer crops"]
  },

  "Tomato___Tomato_mosaic_virus": {
    id: "Tomato___Tomato_mosaic_virus",
    crop: "Tomato",
    condition: "Tomato Mosaic Virus (ToMV)",
    isHealthy: false,
    scientificPathogen: "Tomato Mosaic Tobamovirus (ToMV - highly stable mechanically transmitted virus)",
    severityLevel: "high",
    symptoms: [
      "Light and dark green mottled 'mosaic' pattern on leaves",
      "Leaf distortion, curling, and fern-like narrowing ('shoestring' appearance)",
      "Stunted overall plant growth and uneven fruit ripening with internal brown rings",
      "Necrotic streaks on stems and petioles in certain environmental conditions"
    ],
    immediatePrecautions: [
      "Wash hands thoroughly with soap and water or skim milk before handling tomato plants",
      "Smokers must never handle plants without disinfecting hands (tobacco products carry related tobamoviruses)",
      "Dip pruning tools in non-fat dry milk solution (20%) or trisodium phosphate between plants"
    ],
    preventivePractices: [
      "Select certified ToMV-resistant varieties (labeled with 'T' or 'ToMV')",
      "Purchase certified virus-free seed or treat seed with 10% trisodium phosphate (TSP)",
      "Carefully pull and destroy symptomatic plants, root systems, and soil immediately around them"
    ],
    treatmentGuidance: [
      "There is no cure or chemical spray for viral plant infections",
      "Focus entirely on strict mechanical sanitation, hand hygiene, and resistant cultivars"
    ],
    riskFactors: ["Mechanical handling and trellising", "Contaminated smoking products", "Reusable stakes and tools"]
  },

  "Tomato___healthy": {
    id: "Tomato___healthy",
    crop: "Tomato",
    condition: "Healthy Foliage",
    isHealthy: true,
    severityLevel: "none",
    symptoms: [
      "Rich deep green compound leaves with crisp serrated edges",
      "Turgid foliage free from target rings, yellow mosaic, or bacterial pustules",
      "Vigorous stem growth with healthy yellow flowering clusters"
    ],
    immediatePrecautions: [
      "Maintain consistent soil moisture through drip irrigation to prevent blossom end rot",
      "Mulch soil around plants to protect from future soil-borne fungal spores",
      "Prune lower suckers to maintain canopy ventilation"
    ],
    preventivePractices: [
      "Apply preventive organic neem or copper wash every 14 days during high humidity",
      "Scout lower leaves every 3-4 days for early disease signs",
      "Maintain balanced calcium and potassium fertilization"
    ],
    treatmentGuidance: [
      "No chemical fungicides or bactericides required",
      "Log routine scouting observation in farm records"
    ]
  }
};

export const SAMPLE_LEAF_IMAGES = [
  {
    id: "early_blight_sample",
    title: "Tomato Early Blight Specimen",
    crop: "Tomato",
    condition: "Early Blight",
    imageUrl: "/src/assets/images/agrilens_diseased_sample_1792773563366.jpg",
    description: "Alternaria solani specimen featuring distinct concentric bullseye lesions, yellow chlorotic halo, and tissue necrosis.",
    isHealthy: false,
    groundTruthId: "Tomato___Early_blight"
  },
  {
    id: "healthy_apple_sample",
    title: "Healthy Apple Leaf Specimen",
    crop: "Apple",
    condition: "Healthy Foliage",
    imageUrl: "/src/assets/images/agrilens_healthy_sample_1792773563163.jpg",
    description: "Control specimen showing uniform chlorophyll pigmentation, clean serrated margins, and intact cellular structure.",
    isHealthy: true,
    groundTruthId: "Apple___healthy"
  },
  {
    id: "botanical_macro_sample",
    title: "Botanical Canopy Reference",
    crop: "Apple",
    condition: "Healthy Foliage",
    imageUrl: "/src/assets/images/agrilens_hero_leaf_1792773563082.jpg",
    description: "High-resolution cellular vein inspection specimen displaying high photosynthetic vigor and zero pathogen signs.",
    isHealthy: true,
    groundTruthId: "Apple___healthy"
  }
];
