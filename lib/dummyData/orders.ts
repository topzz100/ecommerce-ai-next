export const ordersList = [
  {
    id: "ord_001",
    orderNumber: "ORD-1001",
    clerkUserId: "user_2h3k4l",
    email: "john.doe@email.com",
    items: [
      {
        _key: "item_1",
        quantity: 1,
        priceAtPurchase: 450000,
        product: {
          id: "prod_01",
          name: "Modern Wooden Dining Table",
          slug: "modern-wooden-dining-table",
          image: {
            asset: {
              id: "img_01",
              url: "https://images.unsplash.com/photo-1615873968403-89e068629265",
            },
          },
        },
      },
      {
        _key: "item_2",
        quantity: 2,
        priceAtPurchase: 180000,
        product: {
          id: "prod_03",
          name: "Ergonomic Office Chair",
          slug: "ergonomic-office-chair",
          image: {
            asset: {
              id: "img_02",
              url: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
            },
          },
        },
      },
    ],
    total: 810000,
    status: "paid",
    address: {
      name: "John Doe",
      line1: "12 Admiralty Way",
      line2: "Lekki Phase 1",
      city: "Lagos",
      postcode: "101245",
      country: "Nigeria",
    },
    stripePaymentId: "pi_3Nkf93ABCD123",
    createdAt: "2026-03-09T14:32:00Z",
  },
  {
    id: "ord_002",
    orderNumber: "ORD-1002",
    clerkUserId: "user_9akd22",
    email: "sarah.james@email.com",
    items: [
      {
        _key: "item_3",
        quantity: 1,
        priceAtPurchase: 850000,
        product: {
          id: "prod_02",
          name: "Luxury Fabric Sofa",
          slug: "luxury-fabric-sofa",
          image: {
            asset: {
              id: "img_03",
              url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
            },
          },
        },
      },
    ],
    total: 850000,
    status: "processing",
    address: {
      name: "Sarah James",
      line1: "5 Wuse Zone 4",
      line2: "Opposite City Mall",
      city: "Abuja",
      postcode: "900001",
      country: "Nigeria",
    },
    stripePaymentId: "pi_3Nkf93EFGH456",
    createdAt: "2026-03-08T11:12:00Z",
  },
  {
    id: "ord_003",
    orderNumber: "ORD-1003",
    clerkUserId: "user_7kd91",
    email: "michael.ade@email.com",
    items: [
      {
        _key: "item_4",
        quantity: 1,
        priceAtPurchase: 950000,
        product: {
          id: "prod_04",
          name: "King Size Upholstered Bed",
          slug: "king-size-upholstered-bed",
          image: {
            asset: {
              id: "img_04",
              url: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
            },
          },
        },
      },
      {
        _key: "item_5",
        quantity: 1,
        priceAtPurchase: 320000,
        product: {
          _id: "prod_05",
          name: "Multi-Layer Storage Cabinet",
          slug: "multi-layer-storage-cabinet",
          image: {
            asset: {
              id: "img_05",
              url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
            },
          },
        },
      },
    ],
    total: 1270000,
    status: "delivered",
    address: {
      name: "Michael Ade",
      line1: "44 Bodija Estate",
      line2: "Near UI Gate",
      city: "Ibadan",
      postcode: "200284",
      country: "Nigeria",
    },
    stripePaymentId: "pi_3Nkf93IJK789",
    createdAt: "2026-03-07T09:05:00Z",
  },
];
