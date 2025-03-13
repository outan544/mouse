//<![CDATA[

function replaceTextWithImages() {
        const replacements = {

":cry": "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiVOdMzl4_D5jPUxdQVHFn3zduEdrOIPQvD37ntYWMLMHTi1xiaSM1pD7Vu0PM2MyDKq3l_isWHwuwo85hsrBIsSypccvCLqBunkH8adJm03LEacLvR3-plUp7BO1SbDaBO6O-Y9qR1JuU7S4PHGomHaE2heB6YwMmDcWuSlN9mo4BOP-2KJjjfNDO22U/s1600/emoji_cry.png' alt='Cry' width='32'>",

":devil": "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpoc2WCz8LZ-d4dh84q1vRfBAM5wSlkozS5WmZKh92Fm1OlpaePdv0xinMY-mET3KqWhoA9KfF8-hghCr1Y831mjc-BXAgIHqr4kEVfaRPMQC2Ms4ZHhYyKHBxAn9CTTASoNFoZMviZmhptVwCw3RnCK0D03wZNcbv3ZkXt4Yb3HkRh9wFczu6lv3uS4w/s1600/emoji_devil32.png' alt='Devil' width='32'>",

":flirt": "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVJ-FmKzQnse9XVhFyYGelk_SSWOZRFMPUrkpBGkgj0QcZBqQ_XMbAS8lK6RoKlzQXWKJqJ8a7CToXiQr1vFSEHlY9jJZ2OyyTweWFeaqe2ODCa92I0TkG2wx2P7kTgANvQ60IuYZkhEgSTiGDo8nDEf22E6Cvc8IHqQIwwaBXstOM1Lscg6kzrWI0Xcc/s1600/emoji_flirt.png' alt='Flirt' width='32'>",

":pain": "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9DkiBiDKs5RItSNGBKozpH0MPPn663pCPe84JSIK3FSVqmxsZrLJBaY1fWrZdmRqdYHDLIT6kZE4EuqMIBJ4Smm1FJ-hS_KKxqt7iFUBRQ3Oxt74kiElVhy8ZeckACJOuNtVWluxYXd9AoxdIosljo16Ssow44UfXk2RS-V6ud139mbh28t1ICSC6xu0/s1600/emoji_pain.png' alt='Pain' width='32'>",

":rotfl": "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJOkYvhJ6pIg_2mP2dhRLz-OCOw4pH593pHNl_MthfgMkCKwNN1WZqi-_UQfizoDYPTgGvKdoDlThgS6MlCXGRNQ3pxweYq9r9KMIbpSFjLzeIsXca7Q6_enVfs_wCOOHWnO58Rw03jxcbQKpLIfQ_dXBdty-PkeHxPhHSwMBKeGmr9jJuZn_qQJjkPZU/s1600/emoji_rotfl.png' alt='Rotfl' width='32'>",

":smile": "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIAnfuOX-uuVX7FbnqWJYLAhAc3A-LA_5BbJ1RW6d6lXj5VD9D5AvHvr6v8alVC6vVCfyNFreZTR2F-snQJ7CTxIZ9UyWmE4xUYO0abWYP0eNZNyyJ65FH1hagLrQh0vHMk64CS69btVF74VdI34gSZXaiYsKoKeZ-lQTiCPmuL5TnMgg3zPozxQ13VGs/s1600/emoji_smile.png' alt='Smile' width='32'>"

        };

        // Ambil semua elemen dengan kelas "chat-message"
        document.querySelectorAll(".comment-content").forEach(element => {
            let content = element.innerHTML;

            // Loop melalui objek replacements dan ganti semua kemunculan teks
            Object.keys(replacements).forEach(key => {
                let escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape karakter khusus
                let regex = new RegExp(escapedKey, "g"); // Buat regex dinamis
                content = content.replace(regex, replacements[key]);
            });

            element.innerHTML = content;
        });
    }

    window.onload = replaceTextWithImages;

//]]>
