tailwind.config = {
    theme: {
            /* extend permet d'ajouter des choses en plus au thème (de base) */
      extend: {
        colors: {
                /* Soit juste une key + value -> bg-primary text-primary etc*/
            "brown-pod": {
                '50': '#fff2eb',
                '100': '#fedac7',
                '200': '#fdb28a',
                '300': '#fc8a4d',
                '400': '#fb6f24',
                '500': '#f55d0b',
                '600': '#d95006',
                '700': '#b44509',
                '800': '#923c0e',
                '900': '#78340f',
                '950': '#451a03',
            },      

            "bright-sun": {
                '50': '#fffaeb',
                '100': '#fef1c7',
                '200': '#fde28a',
                '300': '#fcd34d',
                '400': '#fbc924',
                '500': '#f5be0b',
                '600': '#d9a806',
                '700': '#b48c09',
                '800': '#92730e',
                '900': '#785f0f',
                '950': '#453603',
            },
            
        },

        height: {
            "0/4": "20%",
            "0/5": "10%",
        },

        width: {
            "10/100": "10%",
        }
      }
    }
  }