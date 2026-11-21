export type PassageSentence = {
  es: string
  en: string
}

export type Passage = {
  id: string
  title: string
  blurb: string
  sentences: PassageSentence[]
}

export const PASSAGES: Passage[] = [
  {
    id: 'airport-arrival',
    title: 'Landing in Mexico City',
    blurb: 'Getting off the plane and finding your way out.',
    sentences: [
      {
        es: 'El avión acaba de aterrizar en la Ciudad de México.',
        en: 'The plane has just landed in Mexico City.',
      },
      {
        es: 'Por favor, permanezcan sentados hasta que se apague la señal del cinturón.',
        en: 'Please remain seated until the seatbelt sign is turned off.',
      },
      {
        es: 'Recuerden llevar todo su equipaje de mano.',
        en: 'Remember to take all of your carry-on luggage.',
      },
      {
        es: 'La reclamación de equipaje está en la planta baja, cerca de la salida.',
        en: 'Baggage claim is on the ground floor, near the exit.',
      },
      {
        es: 'Si necesitan un taxi seguro, busquen el módulo oficial del aeropuerto.',
        en: 'If you need a safe taxi, look for the official airport booth.',
      },
    ],
  },
  {
    id: 'hotel-checkin',
    title: 'Hotel check-in',
    blurb: 'A friendly front-desk conversation.',
    sentences: [
      {
        es: 'Buenas tardes. Bienvenido al hotel.',
        en: 'Good afternoon. Welcome to the hotel.',
      },
      {
        es: '¿Tiene una reservación a su nombre?',
        en: 'Do you have a reservation under your name?',
      },
      {
        es: 'Perfecto. Su habitación está en el tercer piso, con vista al patio.',
        en: 'Perfect. Your room is on the third floor, with a view of the courtyard.',
      },
      {
        es: 'El desayuno se sirve de siete a diez y media.',
        en: 'Breakfast is served from seven to ten thirty.',
      },
      {
        es: 'Aquí tiene su llave y la contraseña del Wi‑Fi.',
        en: 'Here is your key and the Wi‑Fi password.',
      },
      {
        es: 'Si necesita algo, no dude en llamar a recepción.',
        en: 'If you need anything, do not hesitate to call the front desk.',
      },
    ],
  },
  {
    id: 'restaurant',
    title: 'Ordering lunch',
    blurb: 'A casual meal with recommendations.',
    sentences: [
      {
        es: 'Hola, ¿mesa para dos?',
        en: 'Hi, a table for two?',
      },
      {
        es: 'Sí, por aquí, por favor. ¿Les ofrezco algo de beber?',
        en: 'Yes, right this way, please. Can I offer you something to drink?',
      },
      {
        es: 'Hoy les recomiendo los tacos al pastor y el agua de jamaica.',
        en: 'Today I recommend the al pastor tacos and hibiscus water.',
      },
      {
        es: 'El chile es suave, pero puedo pedirlos sin picante si prefieren.',
        en: 'The chile is mild, but I can order them without spice if you prefer.',
      },
      {
        es: 'Cuando terminen, me avisan y les traigo la cuenta.',
        en: 'When you finish, let me know and I will bring the check.',
      },
    ],
  },
  {
    id: 'taxi-ride',
    title: 'In the taxi',
    blurb: 'Giving directions and making small talk.',
    sentences: [
      {
        es: 'Buenos días. ¿Me puede llevar a este hotel del centro?',
        en: 'Good morning. Can you take me to this downtown hotel?',
      },
      {
        es: 'Claro. Hay un poco de tráfico, pero llegamos en unos veinte minutos.',
        en: 'Of course. There is a bit of traffic, but we will arrive in about twenty minutes.',
      },
      {
        es: '¿Es su primera vez en la ciudad?',
        en: 'Is this your first time in the city?',
      },
      {
        es: 'Si quiere, puedo dejarlo en la entrada principal.',
        en: 'If you like, I can drop you at the main entrance.',
      },
      {
        es: 'El viaje sale en ciento ochenta pesos. ¿Paga con efectivo o con tarjeta?',
        en: 'The ride is one hundred eighty pesos. Are you paying with cash or card?',
      },
    ],
  },
  {
    id: 'market',
    title: 'At the market',
    blurb: 'Browsing stalls and bargaining politely.',
    sentences: [
      {
        es: 'Pase, pase. Mire estos textiles hechos a mano.',
        en: 'Come in, come in. Look at these handmade textiles.',
      },
      {
        es: 'Este rebozo cuesta cuatrocientos pesos.',
        en: 'This shawl costs four hundred pesos.',
      },
      {
        es: '¿Me puede dar un mejor precio si llevo dos?',
        en: 'Can you give me a better price if I take two?',
      },
      {
        es: 'Le dejo los dos en setecientos. Son de buena calidad.',
        en: 'I will give you both for seven hundred. They are good quality.',
      },
      {
        es: 'Trato hecho. ¿Acepta tarjeta o solo efectivo?',
        en: 'It is a deal. Do you take cards or only cash?',
      },
    ],
  },
  {
    id: 'asking-help',
    title: 'Asking for help',
    blurb: 'Getting directions when you feel a little lost.',
    sentences: [
      {
        es: 'Disculpe, ¿habla inglés?',
        en: 'Excuse me, do you speak English?',
      },
      {
        es: 'Un poquito. ¿En qué le puedo ayudar?',
        en: 'A little. How can I help you?',
      },
      {
        es: 'Busco la estación del metro más cercana.',
        en: 'I am looking for the nearest metro station.',
      },
      {
        es: 'Siga todo derecho dos cuadras y luego gire a la izquierda.',
        en: 'Go straight ahead two blocks and then turn left.',
      },
      {
        es: 'No está lejos. Llega en cinco minutos caminando.',
        en: 'It is not far. You will get there in five minutes on foot.',
      },
      {
        es: 'Muchas gracias. Que tenga buen día.',
        en: 'Thank you very much. Have a good day.',
      },
    ],
  },
  {
    id: 'immigration',
    title: 'Passport control',
    blurb: 'Typical questions at the immigration desk.',
    sentences: [
      {
        es: 'Buenos días. Pasaporte, por favor.',
        en: 'Good morning. Passport, please.',
      },
      {
        es: '¿Cuál es el motivo de su viaje?',
        en: 'What is the purpose of your trip?',
      },
      {
        es: 'Turismo. Voy a quedarme una semana.',
        en: 'Tourism. I am going to stay one week.',
      },
      {
        es: '¿Dónde se va a hospedar?',
        en: 'Where will you be staying?',
      },
      {
        es: 'En un hotel cerca del Zócalo. Aquí tengo la reservación.',
        en: 'At a hotel near the Zócalo. Here is my reservation.',
      },
      {
        es: 'Muy bien. Bienvenido a México. Que disfrute su estancia.',
        en: 'Very good. Welcome to Mexico. Enjoy your stay.',
      },
    ],
  },
  {
    id: 'bus-station',
    title: 'At the bus station',
    blurb: 'Buying tickets for an ADO or long-distance bus.',
    sentences: [
      {
        es: 'Quiero un boleto a Puebla para hoy en la tarde.',
        en: 'I want a ticket to Puebla for this afternoon.',
      },
      {
        es: 'Tenemos salida a las tres y a las cinco y media.',
        en: 'We have departures at three and at five thirty.',
      },
      {
        es: 'La de las tres, por favor. ¿Cuánto cuesta?',
        en: 'The three o’clock one, please. How much does it cost?',
      },
      {
        es: 'Son doscientos cuarenta pesos. ¿Prefiere ventana o pasillo?',
        en: 'It is two hundred forty pesos. Do you prefer window or aisle?',
      },
      {
        es: 'Ventana. ¿El autobús sale de qué andén?',
        en: 'Window. Which platform does the bus leave from?',
      },
      {
        es: 'Andén cuatro. Llegue quince minutos antes, por favor.',
        en: 'Platform four. Please arrive fifteen minutes early.',
      },
    ],
  },
  {
    id: 'pharmacy',
    title: 'At the pharmacy',
    blurb: 'Asking for medicine when you feel under the weather.',
    sentences: [
      {
        es: 'Buenas tardes. Me duele la cabeza y tengo un poco de fiebre.',
        en: 'Good afternoon. My head hurts and I have a little fever.',
      },
      {
        es: '¿Desde cuándo se siente así?',
        en: 'How long have you been feeling like this?',
      },
      {
        es: 'Desde anoche. También me duele la garganta.',
        en: 'Since last night. My throat also hurts.',
      },
      {
        es: 'Le recomiendo este analgésico y pastillas para la garganta.',
        en: 'I recommend this pain reliever and throat lozenges.',
      },
      {
        es: 'Tome una pastilla cada ocho horas, después de comer.',
        en: 'Take one pill every eight hours, after eating.',
      },
      {
        es: '¿Necesita algo para la digestión también?',
        en: 'Do you also need something for digestion?',
      },
    ],
  },
  {
    id: 'cafe',
    title: 'Ordering coffee',
    blurb: 'A quick stop at a café before sightseeing.',
    sentences: [
      {
        es: 'Hola. ¿Me puede dar un café de olla, por favor?',
        en: 'Hi. Can I get a café de olla, please?',
      },
      {
        es: 'Claro. ¿Lo quiere chico, mediano o grande?',
        en: 'Of course. Do you want small, medium, or large?',
      },
      {
        es: 'Mediano. Y también un pan dulce, el de concha.',
        en: 'Medium. And also a sweet bread, the concha.',
      },
      {
        es: '¿Para llevar o para tomar aquí?',
        en: 'To go or for here?',
      },
      {
        es: 'Para llevar. ¿Aceptan tarjeta?',
        en: 'To go. Do you take cards?',
      },
      {
        es: 'Sí. Su total son setenta y cinco pesos.',
        en: 'Yes. Your total is seventy-five pesos.',
      },
    ],
  },
  {
    id: 'museum',
    title: 'Museum ticket line',
    blurb: 'Buying tickets and asking about the exhibits.',
    sentences: [
      {
        es: 'Dos boletos de adulto, por favor.',
        en: 'Two adult tickets, please.',
      },
      {
        es: '¿Tienen descuento para estudiantes o para extranjeros?',
        en: 'Do you have a discount for students or for foreigners?',
      },
      {
        es: 'Hoy el precio general es noventa pesos por persona.',
        en: 'Today the general price is ninety pesos per person.',
      },
      {
        es: '¿Se puede tomar fotos adentro?',
        en: 'Can you take photos inside?',
      },
      {
        es: 'Sí, sin flash. El audioguía cuesta cincuenta pesos más.',
        en: 'Yes, without flash. The audio guide costs fifty pesos more.',
      },
      {
        es: 'La entrada es por la izquierda. Disfruten la visita.',
        en: 'The entrance is on the left. Enjoy your visit.',
      },
    ],
  },
  {
    id: 'beach-hotel',
    title: 'At the beach hotel',
    blurb: 'Asking about pools, towels, and sunset times.',
    sentences: [
      {
        es: '¿A qué hora abre la alberca?',
        en: 'What time does the pool open?',
      },
      {
        es: 'Abre a las ocho de la mañana y cierra a las ocho de la noche.',
        en: 'It opens at eight in the morning and closes at eight at night.',
      },
      {
        es: '¿Dónde puedo pedir toallas para la playa?',
        en: 'Where can I get towels for the beach?',
      },
      {
        es: 'En el club de playa, con su llave de habitación.',
        en: 'At the beach club, with your room key.',
      },
      {
        es: '¿El agua del mar está tranquila hoy?',
        en: 'Is the ocean calm today?',
      },
      {
        es: 'Sí. Y el atardecer se ve mejor desde el muelle.',
        en: 'Yes. And the sunset looks best from the pier.',
      },
    ],
  },
  {
    id: 'convenience-store',
    title: 'At the corner store',
    blurb: 'A quick OXXO run for water and snacks.',
    sentences: [
      {
        es: '¿Dónde están las botellas de agua?',
        en: 'Where are the water bottles?',
      },
      {
        es: 'Al fondo, a la derecha, junto a los refrescos.',
        en: 'In the back, on the right, next to the soft drinks.',
      },
      {
        es: 'También quiero una tarjeta SIM prepago, por favor.',
        en: 'I also want a prepaid SIM card, please.',
      },
      {
        es: '¿La necesita con datos para una semana?',
        en: 'Do you need it with data for one week?',
      },
      {
        es: 'Sí. ¿Me puede activar el paquete aquí?',
        en: 'Yes. Can you activate the plan here for me?',
      },
      {
        es: 'Claro. Su total son doscientos diez pesos.',
        en: 'Of course. Your total is two hundred ten pesos.',
      },
    ],
  },
  {
    id: 'hotel-checkout',
    title: 'Hotel check-out',
    blurb: 'Settling the bill and asking about airport transport.',
    sentences: [
      {
        es: 'Buenos días. Vengo a hacer el check-out.',
        en: 'Good morning. I am here to check out.',
      },
      {
        es: '¿La habitación doscientos doce, cierto?',
        en: 'Room two hundred twelve, correct?',
      },
      {
        es: 'Sí. ¿Me puede dar el detalle de la cuenta?',
        en: 'Yes. Can you give me the bill details?',
      },
      {
        es: 'Incluye dos noches y el servicio a la habitación de anoche.',
        en: 'It includes two nights and last night’s room service.',
      },
      {
        es: 'Perfecto. ¿Hay un taxi o un shuttle al aeropuerto?',
        en: 'Perfect. Is there a taxi or a shuttle to the airport?',
      },
      {
        es: 'Sí. El shuttle sale en quince minutos desde la entrada.',
        en: 'Yes. The shuttle leaves in fifteen minutes from the entrance.',
      },
    ],
  },
  {
    id: 'rideshare',
    title: 'Meeting your rideshare',
    blurb: 'Confirming the car and the drop-off point.',
    sentences: [
      {
        es: 'Hola, ¿es usted el conductor de mi viaje?',
        en: 'Hi, are you the driver for my ride?',
      },
      {
        es: 'Sí. ¿Va al Museo Frida Kahlo?',
        en: 'Yes. Are you going to the Frida Kahlo Museum?',
      },
      {
        es: 'Exacto. ¿Puedo sentarme atrás?',
        en: 'Exactly. May I sit in the back?',
      },
      {
        es: 'Claro. Abróchese el cinturón, por favor.',
        en: 'Of course. Please fasten your seatbelt.',
      },
      {
        es: '¿Me puede dejar en la esquina, antes del semáforo?',
        en: 'Can you drop me at the corner, before the traffic light?',
      },
      {
        es: 'Sin problema. Ya casi llegamos.',
        en: 'No problem. We are almost there.',
      },
    ],
  },
  {
    id: 'tour-desk',
    title: 'Booking a day tour',
    blurb: 'Asking about pyramids, pickup, and what is included.',
    sentences: [
      {
        es: 'Quisiera información sobre el tour a Teotihuacán.',
        en: 'I would like information about the Teotihuacán tour.',
      },
      {
        es: 'Sale todos los días a las ocho de la mañana desde el hotel.',
        en: 'It leaves every day at eight in the morning from the hotel.',
      },
      {
        es: '¿Qué incluye el precio?',
        en: 'What does the price include?',
      },
      {
        es: 'Transporte, guía en español e inglés, y el boleto de entrada.',
        en: 'Transport, a Spanish and English guide, and the entrance ticket.',
      },
      {
        es: '¿Cuántas horas dura el recorrido?',
        en: 'How many hours does the tour last?',
      },
      {
        es: 'Alrededor de seis horas. ¿Le reservo un lugar para mañana?',
        en: 'Around six hours. Shall I reserve a spot for you for tomorrow?',
      },
    ],
  },
]
