const productsList = [
    {
        no: 11,
        materialCode: '7175742700',
        description: 'BD-80YFVEM',
        dimensions: '600(W) x 845(H) x 550(D)',
        price: 460.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 12,
        materialCode: '7175744200',
        description: 'BD-100YFVEM',
        dimensions: '600(W) x 845(H) x 580(D)',
        price: 600.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 13,
        materialCode: '7175744300',
        description: 'BD-90YFVEM',
        dimensions: '600(W) x 845(H) x 580(D)',
        price: 520.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 14,
        materialCode: '7188241510',
        description: 'TD-80XFVEM',
        dimensions: '598(W) x 846(H) x 607(D)',
        price: 610.00,
        categories: ['Dryer', 'Clothes Dryer', 'Home Appliance']
    },
    {
        no: 15,
        materialCode: '970117100010',
        description: 'HRSN9552DDXSG',
        dimensions: '912(W) x 1762(H) x 642(D)',
        price: 750.00,
        categories: ['Refrigerator', 'Side by Side', 'Premium Appliance']
    },
    {
        no: 16,
        materialCode: '970119100076',
        description: 'R-ZXC740KS XTN',
        dimensions: '880(W) x 1833(H) x 738(D)',
        price: 2700.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 17,
        materialCode: '970119100078',
        description: 'R-WXC740KS XW',
        dimensions: '880(W) x 1833(H) x 738(D)',
        price: 3080.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 18,
        materialCode: '970119100081',
        description: 'R-WXC670KS XK',
        dimensions: '825(W) x 1833(H) x 728(D)',
        price: 2800.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 19,
        materialCode: '970119100082',
        description: 'R-WXC670KS XW',
        dimensions: '825(W) x 1833(H) x 728(D)',
        price: 2800.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 20,
        materialCode: '970119100083',
        description: 'R-WXC670KS XH',
        dimensions: '825(W) x 1833(H) x 728(D)',
        price: 2800.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 21,
        materialCode: '970119100085',
        description: 'R-KWC570KS XH',
        dimensions: '685(W) x 1833(H) x 738(D)',
        price: 2150.00,
        categories: ['Refrigerator', 'Multi Door', 'Premium Refrigerator']
    },
    {
        no: 22,
        materialCode: '970119100087',
        description: 'R-WXC620KS XK',
        dimensions: '750(W) x 1833(H) x 738(D)',
        price: 2150.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 23,
        materialCode: '970119100088',
        description: 'R-WXC620KS XW',
        dimensions: '750(W) x 1833(H) x 738(D)',
        price: 2375.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 24,
        materialCode: '970119100091',
        description: 'R-HW610NS XW',
        dimensions: '685(W) x 1833(H) x 738(D)',
        price: 2099.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 25,
        materialCode: '970119100092',
        description: 'R-HW610NS XN',
        dimensions: '685(W) x 1833(H) x 738(D)',
        price: 2099.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 26,
        materialCode: '970119100103',
        description: 'R-S42RS SN',
        dimensions: '600(W) x 1798(H) x 572(D)',
        price: 1150.00,
        categories: ['Refrigerator', 'Side by Side', 'Home Appliance']
    },
    {
        no: 27,
        materialCode: '970119100278',
        description: 'R-HW610JS XK',
        dimensions: '685(W) x 1833(H) x 738(D)',
        price: 2099.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 28,
        materialCode: '970119100279',
        description: 'R-HW610JS XW',
        dimensions: '685(W) x 1833(H) x 738(D)',
        price: 2099.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 29,
        materialCode: '970119100781',
        description: 'R-HW620RS XW',
        dimensions: '685(W) x 1833(H) x 738(D)',
        price: 2150.00,
        categories: ['Refrigerator', 'French Door', 'Premium Refrigerator']
    },
    {
        no: 30,
        materialCode: '970322100018',
        description: 'BD-SG100CJ W',
        dimensions: '630(W) x 1050(H) x 715(D)',
        price: 1320.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Premium Appliance']
    },
    {
        no: 31,
        materialCode: '970323100033',
        description: 'BW-DX105FJN',
        dimensions: '610(W) x 1105(H) x 660(D)',
        price: 970.00,
        categories: ['Washing Machine', 'Top Load Washer', 'Home Appliance']
    },
    {
        no: 32,
        materialCode: '970323100034',
        description: 'BW-DV105AJ N',
        dimensions: '610(W) x 1060(H) x 635(D)',
        price: 850.00,
        categories: ['Washing Machine', 'Top Load Washer', 'Home Appliance']
    },
    {
        no: 33,
        materialCode: '970528100013',
        description: 'MRO-S800YS',
        dimensions: '487(W) x 380(H) x 430(D)',
        price: 450.00,
        categories: ['Microwave Oven', 'Kitchen Appliance', 'Home Appliance']
    },
    {
        no: 34,
        materialCode: '970832100155',
        description: 'ESP-3000R',
        dimensions: '',
        price: 45.00,
        categories: ['Water Pump', 'Utility', 'Home Appliance']
    },
    {
        no: 35,
        materialCode: '980323100004',
        description: 'NW-75ES W',
        dimensions: '577(W) x 1020(H) x 540(D)',
        price: 235.00,
        categories: ['Washing Machine', 'Top Load Washer', 'Home Appliance']
    },
    {
        no: 36,
        materialCode: '990111100114',
        description: 'R-BG415P6MSX GBE',
        dimensions: '595(W) x 1900(H) x 650(D)',
        price: 520.00,
        categories: ['Refrigerator', 'Bottom Freezer', 'Premium Refrigerator']
    },
    {
        no: 37,
        materialCode: '990111100136',
        description: 'R-B410P6MS BSL',
        dimensions: '595(W) x 1900(H) x 650(D)',
        price: 435.00,
        categories: ['Refrigerator', 'Bottom Freezer', 'Home Appliance']
    },
    {
        no: 38,
        materialCode: '990111100173',
        description: 'R-B570P7MS GBK',
        dimensions: '750(W) x 1795(H) x 797(D)',
        price: 690.00,
        categories: ['Refrigerator', 'Bottom Freezer', 'Home Appliance']
    },
    {
        no: 39,
        materialCode: '990111100232',
        description: 'R-BG415P6MSX GBK',
        dimensions: '595(W) x 1900(H) x 650(D)',
        price: 520.00,
        categories: ['Refrigerator', 'Bottom Freezer', 'Premium Refrigerator']
    },
    {
        no: 40,
        materialCode: '990111100233',
        description: 'R-BG415P6MSX GPW',
        dimensions: '595(W) x 1900(H) x 650(D)',
        price: 520.00,
        categories: ['Refrigerator', 'Bottom Freezer', 'Premium Refrigerator']
    },
    {
        no: 41,
        materialCode: '990111100234',
        description: 'R-BG415P6MSX XGR',
        dimensions: '595(W) x 1900(H) x 650(D)',
        price: 520.00,
        categories: ['Refrigerator', 'Bottom Freezer', 'Premium Refrigerator']
    },
    {
        no: 42,
        materialCode: '990112100903',
        description: 'R-V410P8MS BBK',
        dimensions: '650(W) x 1605(H) x 720(D)',
        price: 383.00,
        categories: ['Refrigerator', 'Two Door', 'Home Appliance']
    },
    {
        no: 45,
        materialCode: '990112100904',
        description: 'R-V410P8MS BSL',
        dimensions: '650(W) x 1605(H) x 720(D)',
        price: 383.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 47,
        materialCode: '990112100970',
        description: 'R-V450P8MS BBK',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 418.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 48,
        materialCode: '990112100972',
        description: 'R-V450P8MS PWH',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 418.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 49,
        materialCode: '990112101585',
        description: 'R-VG450P8MS GBK',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 469.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 50,
        materialCode: '990112101586',
        description: 'R-VG450P8MS GPW',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 469.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 51,
        materialCode: '990112102546',
        description: 'R-H240P7MS BSL',
        dimensions: '540(W) x 1460(H) x 650(D)',
        price: 295.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 52,
        materialCode: '990112102583',
        description: 'R-H350P7MS BBK',
        dimensions: '600(W) x 1672(H) x 663(D)',
        price: 370.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 53,
        materialCode: '990112102651',
        description: 'R-V560P7MS BBK',
        dimensions: '715(W) x 1835(H) x 740(D)',
        price: 635.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 54,
        materialCode: '990112102652',
        description: 'R-V560P7MS BSL',
        dimensions: '715(W) x 1835(H) x 740(D)',
        price: 640.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 55,
        materialCode: '990112102735',
        description: 'R-V690P7MS BBK',
        dimensions: '855(W) x 1835(H) x 740(D)',
        price: 719.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 56,
        materialCode: '990112102736',
        description: 'R-V690P7MS BSL',
        dimensions: '855(W) x 1835(H) x 740(D)',
        price: 719.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 57,
        materialCode: '990112102883',
        description: 'R-VG560P7MS GBK',
        dimensions: '715(W) x 1835(H) x 740(D)',
        price: 695.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 58,
        materialCode: '990112102884',
        description: 'R-VG560P7MS GPW',
        dimensions: '715(W) x 1835(H) x 740(D)',
        price: 695.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 59,
        materialCode: '990112102921',
        description: 'R-VG690P7MS GBK',
        dimensions: '855(W) x 1835(H) x 740(D)',
        price: 785.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 60,
        materialCode: '990112102923',
        description: 'R-VG690P7MS GPW',
        dimensions: '855(W) x 1835(H) x 740(D)',
        price: 785.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 62,
        materialCode: '990112102926',
        description: 'R-VG695P9MSX GBK',
        dimensions: '855(W) x 1835(H) x 740(D)',
        price: 840.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 63,
        materialCode: '990112102984',
        description: 'R-VGX450PMS9 GBK',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 515.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 64,
        materialCode: '990112102985',
        description: 'R-VGX450PMS9 XRZ',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 515.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 65,
        materialCode: '990112102996',
        description: 'R-VGX480PMS9 GBK',
        dimensions: '680(W) x 1770(H) x 720(D)',
        price: 545.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 66,
        materialCode: '990112103026',
        description: 'R-VX410PMS9 BBK',
        dimensions: '650(W) x 1605(H) x 720(D)',
        price: 425.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 68,
        materialCode: '990112103048',
        description: 'R-VX450PMS9 BBK',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 470.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 69,
        materialCode: '990112103049',
        description: 'R-VX450PMS9 BSL',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 470.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 70,
        materialCode: '990112103050',
        description: 'R-VX450PMS9 PWH',
        dimensions: '650(W) x 1695(H) x 720(D)',
        price: 470.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 71,
        materialCode: '990112103074',
        description: 'R-VX480PMS9 BBK',
        dimensions: '680(W) x 1770(H) x 720(D)',
        price: 495.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 72,
        materialCode: '990112103075',
        description: 'R-VX480PMS9 BSL',
        dimensions: '680(W) x 1770(H) x 720(D)',
        price: 495.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 73,
        materialCode: '990112103076',
        description: 'R-VX480PMS9 PWH',
        dimensions: '680(W) x 1770(H) x 720(D)',
        price: 495.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 74,
        materialCode: '990113100310',
        description: 'R-S38KPS BBK',
        dimensions: '600(W) x 1810(H) x 655(D)',
        price: 605.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 75,
        materialCode: '990113100311',
        description: 'R-S38KPS CNX',
        dimensions: '600(W) x 1810(H) x 655(D)',
        price: 605.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 76,
        materialCode: '990114100216',
        description: 'R-WB560P9MS GBK',
        dimensions: '750(W) x 1795(H) x 760(D)',
        price: 740.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 77,
        materialCode: '990115100131',
        description: 'R-WB640PMS1 GCK',
        dimensions: '900(W) x 1840(H) x 720(D)',
        price: 675.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 78,
        materialCode: '990115100141',
        description: 'R-WB640VOMS GBK',
        dimensions: '900(W) x 1840(H) x 720(D)',
        price: 1350.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 79,
        materialCode: '990115100142',
        description: 'R-WB640VOMS GS',
        dimensions: '900(W) x 1840(H) x 720(D)',
        price: 1350.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 80,
        materialCode: '990115100143',
        description: 'R-WB640VOMSX MGW',
        dimensions: '900(W) x 1840(H) x 720(D)',
        price: 1550.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 81,
        materialCode: '990115100253',
        description: 'R-WB710PMS2 GCK',
        dimensions: '900(W) x 1840(H) x 740(D)',
        price: 1175.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 82,
        materialCode: '990116100603',
        description: 'R-W690P7MSX GBK',
        dimensions: '855(W) x 1835(H) x 727(D)',
        price: 960.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 83,
        materialCode: '990117100167',
        description: 'R-S705GP2MS GBK',
        dimensions: '920(W) x 1775(H) x 765(D)',
        price: 1211.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 84,
        materialCode: '990117100168',
        description: 'R-S705GP2MS GS',
        dimensions: '920(W) x 1775(H) x 765(D)',
        price: 1211.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    },
    {
        no: 85,
        materialCode: '990117100248',
        description: 'R-S700PMS0 GBK',
        dimensions: '920(W) x 1795(H) x 720(D)',
        price: 960.00,
        categories: ['Washing Machine', 'Front Load Washer', 'Home Appliance']
    }
];

// Export products with search URLs
export const products = productsList.map(product => ({
    ...product,
    searchUrl: `https://www.google.com/search?q=Hitachi+${encodeURIComponent(product.description)}&tbm=isch`
}));
  