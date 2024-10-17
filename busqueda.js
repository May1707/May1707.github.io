document.addEventListener("DOMContentLoaded", function() {
    const palabras = [
        "el sexto", 
        "todas las sangres", 
        "yawar fiesta", 
        "los rios profundos", 
        "el zorro de arriba y el zorro de abajo", 
        "warma kuyay", 
        "la ciudad y los perros", 
        "como leer textos literarios", 
        "como apreciar la musica", 
        "como superar el miedo a todas las trincheras de la vida", 
        "humanitas",
        "las 5 estaciones del autoestima",
        "superate",
        "gracias al miedo",
        "mahtman gandhi",
        "napoleon",
        "julio cesar",
        "la vida despues de ella",
        "el libro negro de las horas",
        "romeo y julieta",
        "la isla del tesoro",
        "the last of the mohicans",
        "los tres mosqueteros",
        "viaje al centro de la tierra",
        "revolucion",
        "padre",
        "odisea",
        "una educacion mortal",
        "gata blanca",
        "elantris",
        "los seis de atlas",
        "el vals de la bruja",
        "el rio encantado",
        "la cabaña",
        "el codigo da vinci",
        "la sombra del viento",
        "la chica del tren",
        "el visitante",
        "la noche humana",
        "el viejo y el mar",
        "pedro paramo",
        "cien años de soledad",
        "don quijote de la mancha",
        "atlas del cuerpo humano",
        "atlas anatomia humana",
        "atlas greografico universal",
        "catesismo de la iglesia catolica",
        "el fuego de la imaginacion",
        "le dedico mi silencio",
        "un barbaro en paris",
        "la verdad de las mentiras",
        "paula",

     ];
    const select = document.getElementById("oxapampa");
    const inputSearch = document.getElementById("input-search");
    const botoncito = document.getElementById("botoncito");
    
    if (select) {
        palabras.forEach(palabra => {
            const option = document.createElement("option");
            option.value = palabra;
            option.textContent = palabra;
            select.appendChild(option);
        });
    }

    if (botoncito) {
        botoncito.onclick = function() {
            realizarBusqueda();
        };
    }

    // Redirigir al presionar "Enter" en el campo de búsqueda
    if (inputSearch) {
        inputSearch.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                realizarBusqueda();
            }
        });
    }

    // Redirigir al hacer clic en el botón de búsqueda (opcional)
    /*if (botoncito) {
        botoncito.onclick = function() {*/
        function realizarBusqueda() {

            const buscar = inputSearch.value.trim().toLowerCase();
            if (buscar == "el sexto") { window.location.href = "sexto.html"; }

            if (buscar == "todas las sangres") { window.location.href = "todaslassangres.html"; }
            
            if (buscar == "yawar fiesta") { window.location.href = "yawar.html"; }
            
            if (buscar == "los rios profundos") { window.location.href = "losriosprofundos.html"; }
            
            if (buscar == "el zorro de arriba y el zorro de abajo") { window.location.href = "elzorrodearribayelzorrodeabajo.html"; }
            
            if (buscar == "warma kuyay") { window.location.href = "warmakuyay.html"; }
            
            if (buscar == "la ciudad y los perros") { window.location.href = "laciudadylosperros.html"; }
            
            if (buscar == "como leer textos literarios") { window.location.href = "comoleertextosliterarioa.html"; }
            
            if (buscar == "como apreciar la musica") { window.location.href = "comoapreciarlamusica.html"; }
            
            if (buscar == "como superar el miedo a todas las trincheras de la vida") { window.location.href = "comosuperarelmiedo.html"; }
            
            if (buscar == "humanitas") { window.location.href = "humanitas.html"; }
            
            if (buscar == "las 5 estaciones del autoestima") { window.location.href = "las5estacionesdelautoestima.html"; }
            
            if (buscar == "superate") { window.location.href = "superate.html"; }
            
            if (buscar == "gracias al miedo") { window.location.href = "graciasalmiedo.html"; }

            if (buscar == "mahtman gandhi") { window.location.href = "mahatmangandhi.html"; }
        
            if (buscar == "julio cesar") { window.location.href = "juliocesar.html"; }
        
            if (buscar == "napoleon") { window.location.href = "napoleon.html"; }

            if (buscar == "la vida despues de ella") { window.location.href = "lavidadespuesdeella.html"; }

            if (buscar == "el libro negro de las horas") { window.location.href = "ellibronegrodelashoras.html"; }
            
            if (buscar == "romeo y julieta") { window.location.href = "romeoyjulieta.html"; }
            
            if (buscar == "la isla del tesoro") { window.location.href = "laisladeltesoro.html"; }
            
            if (buscar == "the last of the mohicans") { window.location.href = "thelastofthemohicans.html"; }
            
            if (buscar == "los tres mosqueteros") { window.location.href = "lostresmosqueteros.html"; }
            
            if (buscar == "viaje al centro de la tierra") { window.location.href = "viajealcentrodelatierra.html"; }
            
            if (buscar == "revolucion") { window.location.href = "revolucion.html"; }
            
            if (buscar == "padre") { window.location.href = "padre.html"; }
            
            if (buscar == "odisea") { window.location.href = "odisea.html"; }
            
            if (buscar == "una educacion mortal") { window.location.href = "unaeducacionmortal.html"; }

            if (buscar == "gata blanca") { window.location.href = "gatablanca.html"; }
            
            if (buscar == "elantris") { window.location.href = "elantris.html"; }
            
            if (buscar == "los seis de atlas") { window.location.href = "losseisatlas.html"; }
            
            if (buscar == "el vals de la bruja") { window.location.href = "elvlasdelabruja.html"; }

            if (buscar == "el rio encantado") { window.location.href = "elrioencantado.html"; }
        
            if (buscar == "la cabaña") { window.location.href = "lacabaña.html"; }

            if (buscar == "el codigo da vinci") { window.location.href = "elcodigodavinci.html"; }

            if (buscar == "la sombra del viento") { window.location.href = "lasombradelviento.html"; }

            if (buscar == "la chica del tren") { window.location.href = "lachicadeltren.html"; }
            
            if (buscar == "el visitante") { window.location.href = "elvisitante.html"; }
            
            if (buscar == "la noche humana") { window.location.href = "lanochehumana.html"; }
            
            if (buscar == "el viejo y el mar") { window.location.href = "viejo.html"; }
            
            if (buscar == "pedro paramo") { window.location.href = "pedroparamo.html"; }
            
            if (buscar == "cien años de soledad") { window.location.href = "cienañosdesoledad.html"; }
            
            if (buscar == "don quijote de la mancha") { window.location.href = "donquijotedelamancha.html"; }
            
            if (buscar == "atlas del cuerpo humano") { window.location.href = "atlasdelcuerpohumano.html"; }
            
            if (buscar == "atlas anatomia humana") { window.location.href = "atlas.html"; }

            if (buscar == "atlas greografico universal") { window.location.href = "atlasgreograficouniversal.html"; }
            
            if (buscar == "catesismo de la iglesia catolica") { window.location.href = "catesismodelaiglesiacatolica.html"; }
            
            if (buscar == "el fuego de la imaginacion") { window.location.href = "elfuegodelaimaginacion.html"; }
            
            if (buscar == "le dedico mi silencio") { window.location.href = "lededicomisilencio.html"; }

            if (buscar == "un barbaro en paris") { window.location.href = "unbarbaroenparis.html"; }
        
            if (buscar == "la verdad de las mentiras") { window.location.href = "laverdaddelasmentiras.html"; }
        
            if (buscar == "paula") { window.location.href = "paula.html"; }

            /*if (buscar == "la vida despues de ella") { window.location.href = "lavidadespuesdeella.html"; }

            if (buscar == "el libro negro de las horas") { window.location.href = "ellibronegrodelashoras.html"; }
            
            if (buscar == "romeo y julieta") { window.location.href = "romeoyjulieta.html"; }
            
            if (buscar == "la isla del tesoro") { window.location.href = "laisladeltesoro.html"; }
            
            if (buscar == "the last of the mohicans") { window.location.href = "thelastofthemohicans.html"; }
            
            if (buscar == "los tres mosqueteros") { window.location.href = "lostresmosqueteros.html"; }
            
            if (buscar == "viaje al centro de la tierra") { window.location.href = "viajealcentrodelatierra.html"; }
            
            if (buscar == "revolucion") { window.location.href = "revolucion.html"; }
            
            if (buscar == "padre") { window.location.href = "padre.html"; }
            
            if (buscar == "odisea") { window.location.href = "odisea.html"; }
            
            if (buscar == "una educacion mortal") { window.location.href = "unaeducacionmortal.html"; }

            if (buscar == "gata blanca") { window.location.href = "gatablanca.html"; }
            
            if (buscar == "elantris") { window.location.href = "elantris.html"; }
            
            if (buscar == "los seis de atlas") { window.location.href = "losseisatlas.html"; }
            
            if (buscar == "el vals de la bruja") { window.location.href = "elvlasdelabruja.html"; }

            if (buscar == "el rio encantado") { window.location.href = "elrioencantado.html"; }
        
            if (buscar == "la cabaña") { window.location.href = "lacabaña.html"; }

            if (buscar == "el codigo da vinci") { window.location.href = "elcodigodavinci.html"; }*/
        };
    });
/*}*/