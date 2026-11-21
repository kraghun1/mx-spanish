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
]
