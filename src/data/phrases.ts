export type CategoryId =
  | 'greetings'
  | 'airport'
  | 'taxi'
  | 'hotel'
  | 'restaurant'
  | 'shopping'
  | 'directions'
  | 'money'
  | 'emergencies'
  | 'polite'

export type Phrase = {
  id: string
  category: CategoryId
  en: string
  es: string
  tip?: string
}

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'greetings', label: 'Greetings' },
  { id: 'airport', label: 'Airport' },
  { id: 'taxi', label: 'Taxi / Uber' },
  { id: 'hotel', label: 'Hotel' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'directions', label: 'Directions' },
  { id: 'money', label: 'Money' },
  { id: 'emergencies', label: 'Emergencies' },
  { id: 'polite', label: 'Polite extras' },
]

export const PHRASES: Phrase[] = [
  // Greetings
  { id: 'g1', category: 'greetings', en: 'Hello', es: 'Hola', tip: 'Works any time of day.' },
  { id: 'g2', category: 'greetings', en: 'Good morning', es: 'Buenos días' },
  { id: 'g3', category: 'greetings', en: 'Good afternoon', es: 'Buenas tardes' },
  { id: 'g4', category: 'greetings', en: 'Good evening / Good night', es: 'Buenas noches' },
  { id: 'g5', category: 'greetings', en: 'How are you?', es: '¿Cómo estás?', tip: 'Informal; use ¿Cómo está? with strangers.' },
  { id: 'g6', category: 'greetings', en: 'Nice to meet you', es: 'Mucho gusto' },
  { id: 'g7', category: 'greetings', en: 'See you later', es: 'Hasta luego' },

  // Airport
  { id: 'a1', category: 'airport', en: 'Where is baggage claim?', es: '¿Dónde está la reclamación de equipaje?' },
  { id: 'a2', category: 'airport', en: 'I am looking for the exit', es: 'Busco la salida' },
  { id: 'a3', category: 'airport', en: 'Where do the taxis leave from?', es: '¿De dónde salen los taxis?' },
  { id: 'a4', category: 'airport', en: 'I need a SIM card', es: 'Necesito una tarjeta SIM' },
  { id: 'a5', category: 'airport', en: 'Is there Wi‑Fi here?', es: '¿Hay Wi‑Fi aquí?' },

  // Taxi / Uber
  { id: 't1', category: 'taxi', en: 'Take me to this address, please', es: 'Lléveme a esta dirección, por favor' },
  { id: 't2', category: 'taxi', en: 'How much does it cost to go downtown?', es: '¿Cuánto cuesta ir al centro?' },
  { id: 't3', category: 'taxi', en: 'Please stop here', es: 'Pare aquí, por favor' },
  { id: 't4', category: 'taxi', en: 'Can you wait five minutes?', es: '¿Puede esperar cinco minutos?' },
  { id: 't5', category: 'taxi', en: 'I am going to the airport', es: 'Voy al aeropuerto' },

  // Hotel
  { id: 'h1', category: 'hotel', en: 'I have a reservation', es: 'Tengo una reservación', tip: 'In Mexico, reservación is common.' },
  { id: 'h2', category: 'hotel', en: 'What time is check-in?', es: '¿A qué hora es el check-in?' },
  { id: 'h3', category: 'hotel', en: 'Is breakfast included?', es: '¿El desayuno está incluido?' },
  { id: 'h4', category: 'hotel', en: 'The Wi‑Fi password, please', es: 'La contraseña del Wi‑Fi, por favor' },
  { id: 'h5', category: 'hotel', en: 'Can I leave my bags here?', es: '¿Puedo dejar mis maletas aquí?' },

  // Restaurant
  { id: 'r1', category: 'restaurant', en: 'A table for two, please', es: 'Una mesa para dos, por favor' },
  { id: 'r2', category: 'restaurant', en: 'The menu, please', es: 'La carta, por favor', tip: 'Menú often means the set lunch special.' },
  { id: 'r3', category: 'restaurant', en: 'What do you recommend?', es: '¿Qué me recomienda?' },
  { id: 'r4', category: 'restaurant', en: 'I am allergic to peanuts', es: 'Soy alérgico a los cacahuates' },
  { id: 'r5', category: 'restaurant', en: 'No spicy, please', es: 'Sin chile, por favor' },
  { id: 'r6', category: 'restaurant', en: 'The check, please', es: 'La cuenta, por favor' },
  { id: 'r7', category: 'restaurant', en: 'Water without ice, please', es: 'Agua sin hielo, por favor' },
  { id: 'r8', category: 'restaurant', en: 'It was delicious', es: 'Estuvo delicioso' },

  // Shopping
  { id: 's1', category: 'shopping', en: 'How much does this cost?', es: '¿Cuánto cuesta esto?' },
  { id: 's2', category: 'shopping', en: 'Do you have a smaller size?', es: '¿Tiene una talla más chica?' },
  { id: 's3', category: 'shopping', en: 'I am just looking', es: 'Sólo estoy mirando' },
  { id: 's4', category: 'shopping', en: 'Can you give me a better price?', es: '¿Me puede dar un mejor precio?', tip: 'Common in markets; less so in malls.' },
  { id: 's5', category: 'shopping', en: 'I will take it', es: 'Me lo llevo' },

  // Directions
  { id: 'd1', category: 'directions', en: 'Where is the bathroom?', es: '¿Dónde está el baño?' },
  { id: 'd2', category: 'directions', en: 'Is it far from here?', es: '¿Está lejos de aquí?' },
  { id: 'd3', category: 'directions', en: 'Turn left', es: 'Gire a la izquierda' },
  { id: 'd4', category: 'directions', en: 'Turn right', es: 'Gire a la derecha' },
  { id: 'd5', category: 'directions', en: 'Straight ahead', es: 'Todo derecho' },
  { id: 'd6', category: 'directions', en: 'I am lost', es: 'Estoy perdido', tip: 'Estoy perdida if you use feminine forms.' },

  // Money
  { id: 'm1', category: 'money', en: 'Do you accept cards?', es: '¿Aceptan tarjetas?' },
  { id: 'm2', category: 'money', en: 'Cash only?', es: '¿Sólo efectivo?' },
  { id: 'm3', category: 'money', en: 'Can you break a five-hundred?', es: '¿Me puede cambiar un billete de quinientos?' },
  { id: 'm4', category: 'money', en: 'Where is an ATM?', es: '¿Dónde hay un cajero automático?' },
  { id: 'm5', category: 'money', en: 'Keep the change', es: 'Quédese con el cambio' },

  // Emergencies
  { id: 'e1', category: 'emergencies', en: 'Help!', es: '¡Ayuda!' },
  { id: 'e2', category: 'emergencies', en: 'I need a doctor', es: 'Necesito un médico' },
  { id: 'e3', category: 'emergencies', en: 'Call the police', es: 'Llame a la policía' },
  { id: 'e4', category: 'emergencies', en: 'I lost my passport', es: 'Perdí mi pasaporte' },
  { id: 'e5', category: 'emergencies', en: 'I do not feel well', es: 'No me siento bien' },

  // Polite extras
  { id: 'p1', category: 'polite', en: 'Please', es: 'Por favor' },
  { id: 'p2', category: 'polite', en: 'Thank you', es: 'Gracias' },
  { id: 'p3', category: 'polite', en: 'Thank you very much', es: 'Muchas gracias' },
  { id: 'p4', category: 'polite', en: 'You are welcome', es: 'De nada' },
  { id: 'p5', category: 'polite', en: 'Excuse me / Sorry', es: 'Perdón', tip: 'Also: Disculpe to get attention.' },
  { id: 'p6', category: 'polite', en: 'I do not understand', es: 'No entiendo' },
  { id: 'p7', category: 'polite', en: 'Do you speak English?', es: '¿Habla inglés?' },
  { id: 'p8', category: 'polite', en: 'Can you speak more slowly?', es: '¿Puede hablar más despacio?' },
]

export function phrasesByCategory(category: CategoryId): Phrase[] {
  return PHRASES.filter((p) => p.category === category)
}
