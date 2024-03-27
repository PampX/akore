const finishedProducts = [
    {name: "eye contours", key: "eye", shortDesc: "Caffeine 10% + EGCG", imgName: "serum-CAFFEINE.png", completeName: "Anti-dark circles & Puffiness serum", paragraphsDescList: ["Akore Formulations has developed this serum to reduce the appearance of bluish dark circles and under-eye puffiness by stimulating blood and lymph circulation. Bags under the eyes are caused by an accumulation of water and fat.", "Deficient blood circulation in this area manifests itself in bluish-tinted dark circles. This serum, highly enriched with caffeine, stimulates blood microcirculation."], checkboxDescList: ["Helps reduce the appearance of puffiness and dark circles under the eyes", "Reduces the appearance of dark circles with a bluish or purplish tint", "Helps eliminate excess water for a smoother eye contour", "Helps slow the signs of skin aging", "Improves skin elasticity", "Reduces signs of fatigue"]},
    {name: "blemish-control", key: "blemish", shortDesc: "Glycolic Acid 10% + Bakuchiol 1%", imgName: "serum-GLYCOLIC-ACID.png", completeName: "Blemish-control & Exfoliating serum", paragraphsDescList: ["Akore Formulations has developed this serum to combat blackheads and dilated pores, for a smooth, even complexion. An uneven complexion can often result from the accumulation of dead cells on the skin's surface.", "Thanks to its high glycolic acid content, our serum acts by exfoliating dead cells and refining pores for smoother, more even skin. What's more, it offers a deep purifying action, effectively combating blackheads."], checkboxDescList:["Helps diminish the appearance of imperfections, without drying out the skin, and combats enlarged pores", "Helps reduce the appearance of blackheads and pimples by unclogging pores blocked by excess sebum", "Helps eliminate dead cells from the epidermal surface, promoting a smoother, more radiant complexion", "Stimulates cell renewal, helping to improve skin texture and reduce signs of aging"]},
    {name: "glow", key: "glow", shortDesc: "Vitamin C 15% + Hyaluronic Acid 1%", imgName: "serum-VITAMINE-C.png", completeName: "Glow & Brightening serum", paragraphsDescList: ["Akore Formulations has developed this serum to restore radiance to dull skin and prevent cutaneous photoaging.", "Insufficient sleep, stress and smoking are factors that stimulate the formation of free radicals, leading to the oxidation of epidermal cells and resulting in a dull complexion.", "Thanks to its high vitamin C content, this serum offers effective protection against this process."], checkboxDescList:["Illuminates dull & tired skin", "Restores radiance for preventing early signs of aging", "Fades acne scars and hyperpigmentation", "Firms and plumps", "Diminishes finelines and wrinkles"]},
    {name: "deep hydratation", key: "hydratation", shortDesc: "Hyaluronic Acid 3% + B5 2 %", imgName: "serum-HYALURONIC-ACID.png", completeName: "Deep hydration & Anti-aging", paragraphsDescList: ["Akore Formulations has developed this serum for hydrated, plumper, smoother skin by compensating for the natural depletion of hyaluronic acid in the skin", "Hyaluronic acid plays an essential role in maintaining the skin's hydration and preserving its soft, voluminous texture. The formula restores the skin's moisture levels throughout the day, and helps the skin retain moisture to plump up dry, dehydrated skin.", "To rebalance hydration, we use 3% plant hyaluronic acid in a blend of three different molecule sizes (high, medium and low molecular weight) helping to hydrate multiple layers of the skin's surface."], checkboxDescList:["Instantly moisturizes for softer & smoother skin", "Replenishes dry & dehydrated skin" , "Promotes skin's suppleness & elasticity" , "Reduces the appearance of fine lines & wrinkles" , "Helps protect skin against external agressions"]},
    {name: "even-complexion", key: "complexion", shortDesc: "Niacinamide 10 % + Zinc PCA 1%", imgName: "serum-NIACINAMIDE.png", completeName: "Even-Complexion & Anti-redness Serum", paragraphsDescList: ["Akore Formulations has developed this serum for blemish-prone skin. It will unify, smooth and optimize your skin's radiance with our water-based serum, enriched with 10% Niacinamide and 1% Zinc.", "This advanced treatment significantly improves skin smoothness while strengthening the skin barrier over time. Enjoy a high concentration of Niacinamide (vitamin B3) and Zinc PCA, designed to magnify your skin's appearance."], checkboxDescList:["Helps prevent imperfections", "Helps soothe redness while smoothing and refining skin texture", "Soothes irritation", "Promotes healing and tightens pores"]},
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