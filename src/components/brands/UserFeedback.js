'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { useState } from 'react';

const feedbackData = {
  Sportstech: {
    en: [
      { id: 1, name: 'Nicolas', avatar: 'N', rating: 4, comment: "Honestly surprised at how quiet this thing is. I use it early in the morning before my flatmate wakes up, and there's zero noise from the pedals. The fold-down is quick, and it really does fit in the corner I measured. The Power Ropes are a bonus; they won't replace a gym session, but they're great for a quick warm-up. Took a star off because the seat felt a bit firm after 40 minutes.", date: '1 week ago' },
      { id: 2, name: 'Masco', avatar: 'M', rating: 4, comment: 'It does what the box says, which I appreciate. I gave it four stars because I expected slightly more resistance at the higher levels. I cycle outdoors, and even level eight felt easy after a couple of weeks. Clearly aimed at people new to cardio, not cyclists. That said, the build quality is fine, and the display is clear. For €169, it is hard to complain too loudly.', date: '2 day ago' },
      { id: 3, name: 'Sophie', avatar: 'S', rating: 4, comment: "I bought this specifically for the reclining mode, and I'm not disappointed. Having back issues, cycling upright was uncomfortable, and this lets me exercise without strain. The assembly was manageable, around 40 minutes solo. The tablet holder is a nice touch. My one gripe is that the saddle height does not have many adjustment positions. Overall, very happy with the purchase for my needs.", date: ' 1 month ago' },
      // { id: 4, name: 'Jonas P', avatar: 'JP', rating: 5, comment: 'High-quality build and great value for money. I use it almost daily and feel fitter.', date: 'a week ago' },
      // { id: 5, name: 'Claudia W', avatar: 'CW', rating: 5, comment: 'I was surprised by how stable the walking pad is. It feels secure even when I train on it for longer periods.', date: 'a month ago' }
    ],
    de: [
      { id: 1, name: 'Nicolas', avatar: 'N', rating: 4, comment: 'Ich war ehrlich überrascht, wie leise dieses Gerät ist. Ich nutze es früh morgens, bevor mein Mitbewohner wach wird, und man hört praktisch nichts. Das Zusammenklappen geht schnell, und es passt wirklich perfekt in die Ecke, die ich vorher ausgemessen habe. Die Power Ropes sind ein nettes Extra – kein Ersatz fürs Fitnessstudio, aber gut zum Aufwärmen. Einen Stern Abzug gibt es wegen des etwas harten Sattels nach längeren Sessions.', date: 'vor einer Woche' },
      { id: 2, name: 'Masco ', avatar: 'M', rating: 4, comment: 'Es macht genau das, was versprochen wird. Vier Sterne, weil ich auf den höheren Widerstandsstufen etwas mehr Intensität erwartet hatte. Ich fahre regelmäßig draußen Rad, und selbst Stufe acht wurde nach einigen Wochen recht leicht. Das Gerät richtet sich eindeutig an Einsteiger und nicht an ambitionierte Fahrer. Verarbeitung und Display sind aber absolut in Ordnung. Für 169 € kann man kaum ernsthaft meckern.', date: 'vor 2 Wochen' },
      { id: 3, name: 'Sophie ', avatar: 'S', rating: 4, comment: 'Ich habe das Bike speziell wegen des halb-liegenden Modus gekauft und bin sehr zufrieden. Aufgrund meiner Rückenprobleme war normales aufrechtes Radfahren unangenehm. Der Aufbau dauerte allein etwa 40 Minuten und war gut machbar. Die Tablet-Halterung gefällt mir ebenfalls. Mein einziger Kritikpunkt ist die begrenzte Sattelverstellung. Insgesamt aber genau das richtige Gerät für meine Bedürfnisse.', date: 'Vor 1 Monat' },
      // { id: 4, name: 'Jonas P', avatar: 'JP', rating: 5, comment: 'Hochwertige Verarbeitung und gutes Preis-Leistungs-Verhältnis. Ich nutze es fast täglich und fühle mich fitter.', date: 'vor einer Woche' },
      // { id: 5, name: 'Claudia W', avatar: 'CM', rating: 5, comment: 'Ich war überrascht, wie stabil das Walking Pad ist. Es fühlt sich sicher an, auch wenn ich länger darauf trainiere.', date: 'vor einem Monat' }
    ]
  },
  Ultrasport: {
    en: [
      { id: 6, name: 'Jasmine ', avatar: 'C', rating: 4, comment: 'Great for losing weight with moderate daily workouts. Feels sturdy, comfortable saddle, pulse seems accurate.', date: '2 hours ago' },
      { id: 7, name: 'Fábio M', avatar: 'C', rating: 4.1, comment: 'Sturdy and handles 112 kg without any issues, above the stated limit, but still performed well.', date: ' a day ago' },
      { id: 8, name: 'Jenny ', avatar: 'A', rating: 3, comment: 'Left pedal thread was damaged/misaligned — could not assemble. Returned the item. Quality control issue.', date: ' 5 days ago' },
      // { id: 9, name: 'Django', avatar: 'D', rating: 4, comment: 'There are no training programs or heart rate monitoring – I miss the motivation from automated workouts.', date: ' a month ago' },
    ],
    de: [
      { id: 6, name: 'Jasmine ', avatar: 'C', rating: 4, comment: '„Sehr gut zum Abnehmen bei moderatem täglichem Training. Stabiler Eindruck, bequemer Sitz und der Pulsmesser wirkt zuverlässig.“', date: 'Vor 2 Stunden' },
      { id: 7, name: 'Fábio M', avatar: 'C', rating: 3, comment: '„Stabil und sogar bei 112 kg problemlos nutzbar, obwohl das über der offiziellen Gewichtsgrenze liegt.“', date: 'vor einem Tag' },
      { id: 8, name: 'Jenny ', avatar: 'A', rating: 2, comment: '„Das Gewinde des linken Pedals war beschädigt und ließ sich nicht montieren. Gerät musste zurückgeschickt werden.“', date: 'Vor 5 Tagen' },
      // { id: 9, name: 'Django', avatar: 'D', rating: 4, comment: ' Keine Trainingsprogramme oder Pulsmessung vorhanden – ich vermisse die Motivation durch automatisierte Workouts.', date: 'vor einem Monat' },
    ]
  },
  SportPlus: {
    en: [
      { id: 10, name: 'Markus H', avatar: 'MH', rating: 4, comment: 'Solid machine. The noise level is genuinely impressive. I use it at night without waking my partner. The app took some getting used to, but once connected, it works well. The saddle needed a cover after about two weeks of regular use, but that was a minor fix.	', date: '3 days ago' },
      { id: 11, name: 'King Jim.', avatar: 'KJ', rating: 3, comment: 'The bike itself is well-made and stable. My main frustration is the app — it dropped connection twice during my first week, and the interface is not very intuitive. I also wish a heart rate strap were included. Still, for the price, I expected worse and was pleasantly surprised by the build.', date: ' a week ago' },
      { id: 12, name: 'Thomas', avatar: 'T', rating: 3, comment: 'I am 195 cm tall and have struggled to find exercise bikes that fit properly. This one fits me perfectly after adjusting the saddle. Setup took about 45 minutes from opening the boxes — not the quickest, but manageable solo. Very smooth ride and the training programs cover everything I need for my weekly cardio plan.', date: ' 2 months ago' }
    ],
    de: [
      { id: 10, name: 'Markus H', avatar: 'MK', rating: 3, comment: 'Solides Gerät. Die Lautstärke ist wirklich beeindruckend niedrig. Ich trainiere oft abends, ohne meine Partnerin zu wecken. Die App brauchte etwas Eingewöhnung, funktioniert inzwischen aber gut. Der Sattel wurde nach zwei Wochen mit einer Gelauflage deutlich angenehmer.', date: ' Vor 3 Tagen' },
      { id: 11, name: 'King Jim.', avatar: 'KJ', rating: 4, comment: 'Das Bike selbst ist stabil und hochwertig verarbeitet. Mein größter Kritikpunkt ist die App – die Verbindung wurde in der ersten Woche zweimal unterbrochen und die Bedienung ist nicht besonders intuitiv. Trotzdem bin ich für den Preis positiv überrascht.', date: 'vor 10 Tagen' },
      { id: 12, name: 'Thomas', avatar: 'T', rating: 2, comment: 'Ich bin 195 cm groß und hatte bisher Schwierigkeiten, passende Heimtrainer zu finden. Dieses Modell passt nach der richtigen Einstellung perfekt. Der Aufbau dauerte etwa 45 Minuten, war aber allein machbar. Sehr ruhiges Fahrgefühl und gute Trainingsprogramme.', date: 'vor einer Woche' }
    ]
  },
  DOMYOS: {
    en: [
      { id: 13, name: 'Renix', avatar: 'R', rating: 3, comment: 'Very happy with this bike for the price. I use it every morning for about 25–30 minutes, and it is doing the job perfectly. The assembly took around 40 minutes, with my husband helping. The noise is really low — my downstairs neighbour has not complained once!.', date: ' 1 day ago' },
      { id: 14, name: 'Andro John', avatar: 'AJ', rating: 3, comment: 'Good starter bike but I felt the resistance levels were not enough after about three months. I workout daily and I am at level 7 all the time now which is not challenging enough. The bike itself is solid and quiet. I just wish there were more resistance levels or a heavier flywheel. Good value for what it is though.', date: ' 6 days ago' },
      { id: 15, name: 'Matt Wid', avatar: 'MW', rating: 3, comment: "I am 58 years old and bought this for gentle daily exercise after my doctor's advice. It is perfect for my needs, light, easy to get on and off, and the low resistance levels are ideal for my pace. ", date: ' a week ago' },
    ],
    de: [
      { id: 13, name: 'Renix', avatar: 'R', rating: 3, comment: '„Ich bin für den Preis wirklich zufrieden. Ich nutze das Bike jeden Morgen etwa 25–30 Minuten und es erfüllt seinen Zweck perfekt. Der Aufbau dauerte ungefähr 40 Minuten mit Hilfe meines Mannes. Das Geräuschlevel ist sehr niedrig — mein Nachbar unter mir hat sich bisher kein einziges Mal beschwert!“', date: 'vor 1 Tag' },
      { id: 14, name: 'Andro John', avatar: 'AJ', rating: 3, comment: '„Gutes Einsteiger-Bike, aber nach etwa drei Monaten waren mir die Widerstandsstufen zu wenig. Ich trainiere täglich und nutze inzwischen ständig Stufe 7, die nicht mehr herausfordernd genug ist. Das Bike selbst ist stabil und leise. Ich hätte mir nur mehr Widerstand oder ein schwereres Schwungrad gewünscht.“', date: 'Vor 6 Tagen' },
      { id: 15, name: 'Matt Wid', avatar: 'MW', rating: 3, comment: '„Ich bin 58 Jahre alt und habe das Bike nach Empfehlung meines Arztes für tägliche leichte Bewegung gekauft. Für meine Bedürfnisse ist es perfekt — leicht zu benutzen und die niedrigen Widerstandsstufen passen ideal zu meinem Tempo.“', date: 'vor einer Woche' },
    ]
  },
  AsVIVA: {
    en: [
      { id: 16, name: 'Kevin', avatar: 'K', rating: 3, comment: 'Very quiet machine — I can watch TV at normal volume while training. The flywheel makes a huge difference compared to my old budget bike. Kinomap is brilliant once you commit to the subscription. Assembly took about 40 minutes but the manual skips a few steps you need to know, particularly about the pedals.', date: '3 hours ago' },
      { id: 17, name: 'Robert B', avatar: 'RB', rating: 3, comment: 'Build quality feels genuinely solid for the money. The chest strap inclusion is a real bonus, accurate pulse readings from day one. My only frustration is the Kinomap subscription being essentially required to get the most out of the app features. For the asking price I would have expected that to be included at least for the first year.', date: ' 2 days ago' },
      { id: 18, name: 'Maria', avatar: 'M', rating: 4, comment: 'Using this for physiotherapy rehab after a knee procedure, the low step-over height and gentle watt control in the lower programs are genuinely suited for that purpose. The saddle needed a gel cover after the first month of daily sessions but otherwise I have zero complaints. The machine runs silently and the multi-user profile system means my husband and I both have our own settings stored.', date: '5 days ago' }
    ],
    de: [
      { id: 16, name: 'Kevin', avatar: 'K', rating: 3, comment: '„Sehr leises Gerät — ich kann problemlos nebenbei fernsehen. Das Schwungrad macht im Vergleich zu meinem alten Billig-Bike einen riesigen Unterschied. Kinomap funktioniert hervorragend, sobald man das Abo nutzt. Die Montage dauerte etwa 40 Minuten, allerdings fehlen in der Anleitung einige wichtige Hinweise.“', date: 'gerade eben' },
      { id: 17, name: 'Robert B', avatar: 'RB', rating: 3, comment: '„Die Verarbeitungsqualität wirkt für den Preis wirklich solide. Besonders positiv finde ich den mitgelieferten Brustgurt mit genauen Pulsmessungen. Schade ist nur, dass Kinomap praktisch ein Pflicht-Abo wird, wenn man alle Funktionen nutzen möchte.“', date: 'vor 2 Tagen' },
      { id: 18, name: 'Maria', avatar: 'M', rating: 4, comment: '„Ich nutze das Ergometer für die Physiotherapie nach einer Knieoperation. Die niedrige Einstiegshöhe und die sanfte Wattsteuerung eignen sich dafür hervorragend. Nach einem Monat brauchte ich zwar einen Gel-Sattelüberzug, ansonsten bin ich sehr zufrieden. Das Gerät läuft extrem leise.“', date: 'Vor 5 Tagen' }
    ]
  },
  Peloton: {
    en: [
      { id: 19, name: 'Luna', avatar: 'L', rating: 4, comment: 'Just completed my hundredth ride, and I genuinely cannot imagine going back to the gym. The instructors are motivating, the screen is stunning, and the auto-resistance feature has completely changed how I experience hill climbs. Worth every cent if you actually commit to using it regularly. ', date: '3 hours ago' },
      { id: 20, name: 'Meiling.', avatar: 'M', rating: 3, comment: 'Fantastic bike and I love the classes, but the monthly membership on top of the purchase price stings. The Peloton IQ rep tracker is clever but it lost count a few times during my kettlebell sets. Solid product overall — just make sure you account for the ongoing subscription cost before buying.', date: ' 2 days ago' },
      { id: 21, name: 'Salma.M.', avatar: 'SM', rating: 3, comment: 'Three months of daily use, and it performs flawlessly. The swivel screen makes it feel like two machines in one — I use it for yoga twice a week and cycling five times. The call-out from instructors felt surprisingly personal and motivating. Took off a star only because the subscription is non-optional.', date: '5 days ago' }
    ],
    de: [
      { id: 19, name: 'Luna', avatar: 'L', rating: 3, comment: 'Ich habe gerade meine hundertste Fahrt abgeschlossen und kann mir ehrlich gesagt nicht mehr vorstellen, wieder ins Fitnessstudio zu gehen. Die Trainer motivieren unglaublich, das Display ist fantastisch und die automatische Widerstandsanpassung verändert das Fahrerlebnis komplett. Absolut lohnenswert, wenn man regelmäßig trainiert.', date: 'Vor 3 Stunden' },
      { id: 20, name: 'Meiling', avatar: 'M', rating: 3, comment: 'Tolles Bike und großartige Kurse, aber die monatliche Mitgliedschaft zusätzlich zum Kaufpreis ist teuer. Die Peloton IQ Wiederholungserkennung ist clever, hat bei meinen Kettlebell-Übungen aber gelegentlich falsch gezählt. Insgesamt trotzdem ein starkes Produkt.', date: 'vor einem Tag' },
      { id: 21, name: 'Salma.M', avatar: 'SM', rating: 3, comment: 'Nach drei Monaten täglicher Nutzung funktioniert alles einwandfrei. Durch den Schwenkbildschirm fühlt es sich wie zwei Geräte in einem an — ich nutze es sowohl für Yoga als auch fürs Cycling. Einen Stern Abzug gibt es nur wegen der verpflichtenden Mitgliedschaft.', date: 'vor 4 Tagen' },
    ]
  },
  Nordictrack: {
    en: [
      { id: 22, name: 'Marcus R.', avatar: 'MR', rating: 3, comment: "The build quality is excellent — this thing feels rock solid and handles my heavier frame without any wobble whatsoever. The screen is genuinely impressive. My only gripe is that the handlebars don't go high enough for my height (6'3\"), so long rides can put some strain on my lower back. A minor but real ergonomic limitation." , date: '8 days ago' },
      { id: 23, name: 'John Victor.', avatar: 'JV', rating: 4, comment: "Coming from a basic spin bike, the S24 feels like a completely different universe. Being able to watch Netflix while cycling has made my 45-minute rides fly by. Setup took about 90 minutes with two people — manageable, but not the easiest assembly I've done. The fan auto-speed feature is a genuinely thoughtful touch.", date: ' 3 days ago' },
      { id: 24, name: 'Theo K', avatar: 'TK', rating: 3, comment: "Good bike, honest rating. If you subscribe to iFIT, it is genuinely one of the best cycling experiences I've had at home. The outdoor ride content is stunning and the automatic resistance changes make you forget you're indoors. That said, if the subscription ever became unavailable, this would be a very expensive stationary bike. Factor that into your decision.", date: '9 days ago' }
    ],
    de: [
      { id: 22, name: 'Marcus R', avatar: 'L', rating: 4, comment: 'Die Verarbeitungsqualität ist hervorragend und das Bike fühlt sich extrem stabil an. Der Bildschirm ist wirklich beeindruckend. Mein einziger Kritikpunkt ist die Lenkerhöhe – mit 1,90 m Körpergröße hätte ich mir mehr Verstellmöglichkeiten gewünscht.', date: 'Vor 2 Stunden' },
      { id: 23, name: 'John Victor.', avatar: 'JV', rating: 3, comment: 'Im Vergleich zu meinem alten Spin Bike fühlt sich das S24 wie eine völlig neue Trainingswelt an. Netflix während des Fahrens macht lange Einheiten deutlich angenehmer. Der Aufbau dauerte etwa 90 Minuten mit zwei Personen.', date: 'vor einem Tag' },
      { id: 24, name: 'Theo K', avatar: 'T', rating: 3, comment: 'Gutes Bike mit ehrlicher Bewertung. Mit iFIT gehört das Trainingserlebnis zu den besten, die ich zu Hause hatte. Die automatischen Widerstandsänderungen und Outdoor-Strecken sind hervorragend. Ohne Abo wäre das Gerät allerdings deutlich weniger attraktiv.', date: 'Vor 5 Tagen' },
    ]
  },
  Wahoo: {
    en: [
      { id: 25, name: 'Miriam K', avatar: 'MK', rating: 4, comment: ' Setup took about 30 minutes, which is longer than expected for a bike at this price. Once dialled in, it is perfect. The Zwift controls in the hoods are exceptionally well designed. I previously used clip-on Zwift Clicks, and these are far superior. Race Mode makes sprint finishes feel genuinely electric. ', date: '4 days ago' },
      { id: 26, name: ' Roberto A', avatar: 'RA', rating: 3, comment: ' Excellent performance, but I cannot ignore the fact that internally this is the same bike Wahoo sold in 2020. At four thousand euros, I expected more than a new saddle and handlebars. That said, as a pure riding experience, it is the best I have used indoors. ', date: ' 3 days ago' },
      { id: 27, name: ' Dewal Brivi ', avatar: 'D', rating: 3, comment: 'The noise level is impressively low. My partner can sleep while I train at 5 am. The KICKR Bridge is a clever solution for Apple TV connectivity. My main frustration is the lack of any display; I have to prop up a tablet every session, which feels inelegant for a €4,000 machine.', date: '6 days ago' }
    ],
    de: [
      { id: 25, name: 'Miriam K', avatar: 'MK', rating: 4, comment: 'Der Aufbau dauerte etwa 30 Minuten und damit länger als erwartet. Sobald alles eingestellt war, funktionierte das Bike perfekt. Die Zwift-Steuerung in den Griffen ist hervorragend umgesetzt. Race Mode macht Sprint-Finishes unglaublich intensiv.', date: 'Vor 2 Stunden' },
      { id: 26, name: 'Roberto A', avatar: 'RA', rating: 3, comment: 'Die Leistung ist hervorragend, aber im Kern ist es immer noch dasselbe Bike, das Wahoo bereits 2020 verkauft hat. Für 4.000 € hätte ich mehr Innovation erwartet. Das Fahrgefühl ist allerdings das beste, das ich bislang indoor erlebt habe.', date: 'vor einem Tag' },
      { id: 27, name: 'Dewal Brivi', avatar: 'D', rating: 3, comment: 'Der Geräuschpegel ist beeindruckend niedrig. Mein Partner kann schlafen, während ich morgens um 5 Uhr trainiere. Die KICKR Bridge ist besonders für Apple TV eine clevere Lösung. Was mich stört, ist das fehlende Display — bei einem 4.000-€-Bike hätte ich mehr erwartet.', date: 'Vor 5 Tagen' },
    ]
  },
  Garmin: {
    en: [
      { id: 28, name: ' Marcus H', avatar: 'MH', rating: 3, comment: " The silence genuinely changed my indoor training experience. I no longer feel guilty about a 5 AM session. The power numbers align perfectly with my outdoor power meter. My only real complaint is that the fans don't quite keep up during hard threshold blocks.", date: '1 day ago' },
      { id: 29, name: 'Sasha R', avatar: 'SR', rating: 3, comment:  "Technically impressive, but I regret not comparing it against the Wahoo before buying. The lack of tilt matters more than I expected on long Zwift climbs. I'd rate it higher if it were $500 cheaper." , date: ' 5 days ago' },
      { id: 30, name: 'Paul T', avatar: 'PT', rating: 3, comment: "I share this with my partner, who has a very different bike fit, and the adjustment system is genuinely excellent — no fiddling, no guessing. The Garmin Connect integration saves us both time. Would I spend $4K again? Probably. But I'd think hard about it.", date: '8 days ago' },
    ],
    de: [
      { id: 28, name: 'Marcus H', avatar: 'MH', rating: 3, comment: 'Die Lautlosigkeit hat mein Indoor-Training komplett verändert. Ich habe kein schlechtes Gewissen mehr bei einer Session um 5 Uhr morgens. Die Leistungsdaten stimmen perfekt mit meinem Outdoor-Powermeter überein. Mein einziger Kritikpunkt: Die Lüfter sind bei harten Schwellenintervallen etwas zu schwach.', date: 'Vor 1 Tag' },
      { id: 29, name: 'Sasha R', avatar: 'SR', rating: 3, comment: 'Technisch beeindruckend, aber ich bereue es, nicht stärker mit dem Wahoo verglichen zu haben. Dass sich das Bike bei langen Zwift-Anstiegen nicht neigt, stört mich mehr als erwartet. Für 500 Dollar weniger wäre die Bewertung deutlich besser ausgefallen.', date: 'Vor 5 Tag' },
      { id: 30, name: 'Paul R', avatar: 'PR', rating: 3, comment: 'Ich teile das Bike mit meinem Partner, der eine völlig andere Sitzposition benötigt, und das Anpassungssystem ist wirklich hervorragend – kein Rätselraten, keine komplizierten Einstellungen. Die Garmin-Connect-Integration spart uns viel Zeit. Würde ich wieder 4.000 Dollar ausgeben? Wahrscheinlich schon. Aber ich würde vorher lange darüber nachdenken.', date: 'Vor 8 Tag' },
    ]
  },
  SportstechSX175: {
    en: [
      { id: 1, name: 'Laura M', avatar: 'LM', rating: 4, comment: 'Really happy with this bike. Arrived quickly, assembly was easy — took me about 40 minutes alone. It is absolutely silent, which was my main concern living in a flat. Connects to the Sportstech app without any issue. Loses a star because I wish there was a cadence display, but for the price, it is excellent.', date: '1 week ago' },
      { id: 2, name: 'Marcus R', avatar: 'MR', rating: 4, comment: 'Solid build, smooth pedalling, and no annoying squeaks or rattles. The magnetic resistance feels well-balanced — not too easy, not brutally difficult. The app keeps me motivated with the virtual routes. Customer support was helpful when I had an assembly question. Would recommend to anyone starting.', date: '2 day ago' },
      { id: 3, name: 'Salma K', avatar: 'SK', rating: 4, comment: "Good quality overall and very easy to use. I use it daily for 30-minute sessions, and it holds up well. The reason I haven't given 5 stars is the app — you need a subscription to get the good content, which wasn't made totally clear before purchase. The bike itself, though, is really solid, and the call-and-response between app and hardware is smooth.", date: ' 1 month ago' },
      // { id: 4, name: 'Jonas P', avatar: 'JP', rating: 5, comment: 'High-quality build and great value for money. I use it almost daily and feel fitter.', date: 'a week ago' },
      // { id: 5, name: 'Claudia W', avatar: 'CW', rating: 5, comment: 'I was surprised by how stable the walking pad is. It feels secure even when I train on it for longer periods.', date: 'a month ago' }
    ],
    de: [
      { id: 1, name: 'Laura M', avatar: 'LM', rating: 4, comment: '„Ich bin wirklich zufrieden mit diesem Bike. Die Lieferung war schnell und der Aufbau einfach – allein etwa 40 Minuten. Es ist absolut leise, was für mich in einer Wohnung entscheidend war. Die Verbindung zur Sportstech-App funktioniert problemlos. Einen Stern Abzug gibt es, weil ich mir eine Trittfrequenzanzeige gewünscht hätte. Für den Preis aber hervorragend.“', date: 'vor einer Woche' },
      { id: 2, name: 'Marcus R', avatar: 'MR', rating: 4, comment: '„Solide Verarbeitung, geschmeidiges Pedalieren und keine störenden Geräusche oder Vibrationen. Der Magnetwiderstand fühlt sich ausgewogen an – weder zu leicht noch extrem schwer. Die App motiviert mich mit virtuellen Strecken. Der Kundensupport war bei einer Frage zum Aufbau sehr hilfreich. Würde ich Einsteigern definitiv empfehlen.“', date: 'vor 2 Wochen' },
      { id: 3, name: 'Salma K', avatar: 'SK', rating: 4, comment: '„Insgesamt gute Qualität und sehr einfach zu bedienen. Ich nutze das Bike täglich für 30-Minuten-Einheiten und es hält problemlos stand. Der einzige Kritikpunkt ist die App – für die guten Inhalte braucht man ein Abonnement, was vor dem Kauf nicht ganz klar war. Das Bike selbst ist aber wirklich solide.“', date: 'Vor 1 Monat' },
      // { id: 4, name: 'Jonas P', avatar: 'JP', rating: 5, comment: 'Hochwertige Verarbeitung und gutes Preis-Leistungs-Verhältnis. Ich nutze es fast täglich und fühle mich fitter.', date: 'vor einer Woche' },
      // { id: 5, name: 'Claudia W', avatar: 'CM', rating: 5, comment: 'Ich war überrascht, wie stabil das Walking Pad ist. Es fühlt sich sicher an, auch wenn ich länger darauf trainiere.', date: 'vor einem Monat' }
    ]
  },
};

const generateUserFeedback = (brandName, locale) => {
  const key = brandName.toLowerCase();
  if (feedbackData[key] && feedbackData[key][locale]) {
    return feedbackData[key][locale];
  }
  return feedbackData[key]?.en || [];
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function UserFeedback({ brand, feedbackKey }) {
  const t = useTranslations('brands');
  const locale = useLocale();
  const [expandedComments, setExpandedComments] = useState(new Set());

  // Use feedbackKey if provided, otherwise fallback to brand.name
  const key = feedbackKey ? feedbackKey : brand.name;
  const userFeedback = feedbackData[key]?.[locale] || feedbackData[key]?.en || [];

  const toggleExpanded = (commentId) => {
    const newExpanded = new Set(expandedComments);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedComments(newExpanded);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('userFeedback')}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {userFeedback.map((feedback) => (
            <div key={feedback.id} className="bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {feedback.avatar}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {feedback.name}
                      </h4>
                      <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                        {feedback.date}
                      </span>
                    </div>
                    <StarRating rating={feedback.rating} />
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mt-4">
                  {feedback.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
