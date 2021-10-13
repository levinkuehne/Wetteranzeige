# Wetteranzeige

Jérôme, Robin, Levin

### Vorgehen
Wir haben ein Programm in P5js erstellt, welches je nach Wetterlage das Wetter einer bestimmten Ortschaft anzeigt. Diese Ortschaft kann man beliebig angeben und das Wetter wird grafisch angezeigt. 

Dazu werden wir die OpenWeather API (https://openweathermap.org/api) benutzen.

Der Code ist so gestaltet, dass Man zuerst einen Ort eingibt von diesem werden dann die Daten abgerufen und je nach dem wie die entsprechenden Daten sind, wird das passende Bild angezeigt.
Also wenn es z.B in Zürich 10 Grad ist und es Regnet, soll eine Regenwolke dargestellt werden, in der Mitte ein Thermometer mit Temperatur und links die dazu passende Kleidung.
Damit wir alle gleichzeitig etwas zu tun haben wir und aufgeteilt. Jemand oder zwei Arbeiten am Code für die API und die anderen erstellen jeweils schon die szenarien der verschiedenen Wetterlagen. Mit dieser möglichkeit kann man schneller und effizienter arbeiten.

### API 
Als API benutzen wir eine von Openweather (https://openweathermap.org/api). Diese ist sehr gut, da man bei einer Abfrage alle details zum eingegebenen Ort bekommt und diese auch schon in der Konsole beschrieben sind. Diese Daten können wir mit Json rauslesen und danach grafisch mit unserem P5JS code darstelen.

![2021-10-11](https://user-images.githubusercontent.com/89902538/136807593-71a2b96e-f4b9-47e6-87f7-7523554ceaed.png)


