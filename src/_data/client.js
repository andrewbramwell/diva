module.exports = {
    "name": "Diva Thai Massage & Beauty",
    "email": "divathaimassageandbeauty@gmail.com",
    "phoneForTel": "+447984601122",
    "phoneFormatted": "079846 01122",
    "openingHours": "Mon-Sun: 9am-4pm",
    "onlineBooking": "https://divathaimassagebeauty.setmore.com/",
    "address": {
        "lineOne": "The Body-Mind Clinic",
        "lineTwo": "128 Newport Road",
        "city": "Cardiff",
        "state": "",
        "zip": "CF24 1DH",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/xipRfE7JAAxuYr9n7"
    },
    "socials": {
        "facebook": "https://www.facebook.com/profile.php?id=61572882921474",
        "whatsapp": "https://wa.me/+447984601122",
        "googleReview": "https://g.page/r/CWMdot-UpYlzEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://www.divathaimassage.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.divathaimassage.co.uk/#business",
            "name": "Diva Thai Massage & Beauty",
            "image": "https://www.divathaimassage.co.uk/assets/svgs/logo.svg",
            "url": "https://www.divathaimassage.co.uk",
            "telephone": "+447984601122",
            "email": "divathaimassageandbeauty@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "The Body-Mind Clinic, 128 Newport Road",
                "addressLocality": "Cardiff",
                "postalCode": "CF24 1DH",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/xipRfE7JAAxuYr9n7"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "16:00"
            },
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61572882921474"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.divathaimassage.co.uk/#website",
            "url": "https://www.divathaimassage.co.uk",
            "name": "Diva Thai Massage & Beauty",
            "publisher": {
                "@id": "https://www.divathaimassage.co.uk/#business"
            }
        }
    }
};


