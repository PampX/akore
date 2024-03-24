const finishedProducts = [
    {name: "eye contours", key: "eye", shortDesc: "Caffeine 10% + EGCG", imgName: "serum-CAFFEINE.png", completeName: "ANTI-DARK CIRCLES & PUFFINESS SERUM", paragraphsDescList: ["Akore Formulations has developed this serum to reduce the appearance of bluish dark circles and under-eye puffiness by stimulating blood and lymph circulation. Bags under the eyes are caused by an accumulation of water and fat.", "Deficient blood circulation in this area manifests itself in bluish-tinted dark circles. This serum, highly enriched with caffeine, stimulates blood microcirculation."], checkboxDescList: ["Helps reduce the appearance of puffiness and dark circles under the eyes",
        "Reduces the appearance of dark circles with a bluish or purplish tint",
        "Helps eliminate excess water for a smoother eye contour",
        "Helps slow the signs of skin aging",
        "Improves skin elasticity",
        "Reduces signs of fatigue"]},
    {name: "blemish-control", key: "blemish", shortDesc: "Glycolic Acid 10% + Bakuchiol 1%", imgName: "serum-GLYCOLIC-ACID.png"},
    {name: "glow", key: "glow", shortDesc: "Vitamin C 15% + Hyaluronic Acid 1%", imgName: "serum-VITAMINE-C.png"},
    {name: "deep hydratation", key: "hydratation", shortDesc: "Hyaluronic Acid 3% + B5 2 %", imgName: "serum-HYALURONIC-ACID.png"},
    {name: "even-complexion", key: "complexion", shortDesc: "Niacinamide 10 % + Zinc PCA 1%", imgName: "serum-NIACINAMIDE.png"},
];

const rawProducts = [
    {name: "glycolic acid", key: "glycolic", shortDesc: "Exfoliating", imgName: "serum-MP--GLYCOLIC-ACID.png"},
    {name: "hyaluronic acid", key: "hyaluronic", shortDesc: "Hydration & Anti-aging", imgName: "serum-MP--HYALURONIC-ACID.png"},
    {name: "bakuchiol", key: "bakuchiol", shortDesc: "Blemish-control", imgName: "serum-MP--BAKUCHIOL.png"},
    {name: "caffeine", key: "caffeine", shortDesc: "Eye contours", imgName: "serum-MP--CAFFEINE.png"},
    {name: "EGCG", key: "EGCG", shortDesc: "Glow & Anti-aging", imgName: "serum-MP--EGCG.png"},
    {name: "niacinamide", key: "niacinamide", shortDesc: "Hyaluronic Acid 3% + B5 2 %", imgName: "serum-MP--NIACINAMIDE.png"},
    {name: "vitamin C", key: "vitamin", shortDesc: "Blemish-control", imgName: "serum-MP--VITAMIN-C.png"},
    {name: "zinc", key: "zinc", shortDesc: "Healing & soothing", imgName: "serum-MP--ZINC.png"},
]

export function getFinishedProducts(){
    return finishedProducts;
}

export function getFinishedProductByKey(key){
    return finishedProducts.find(product => product.key === key);
}

export function getRawProducts(){
    return rawProducts;
}

export function getRawProductByKey(key){
    return rawProducts.find(product => product.key === key);
}