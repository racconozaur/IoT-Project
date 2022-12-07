#include <FirebaseESP8266.h>
#include <ESP8266WiFi.h>
#include "DHT.h"
#include <hcsr04.h>

#define DHTTYPE DHT11

#define ssid "caniget70"
#define password "70707070"

// creating connection to firebase 
#define FIREBASE_HOST "iotproject-6f5b2-default-rtdb.europe-west1.firebasedatabase.app"
#define FIREBASE_AUTH "lKeXjnJMRnUpZTY6sSkOlfiiWsVsBKLUBPTAX2la"

// pin identification
uint8_t DHTPin = D1;
uint8_t LEDpin = D2;
uint8_t Motorpin = D3;
uint8_t Relaypin = D0;

uint8_t Trigpin = D5;
uint8_t Echopin = D6;


               
// Initialize DHT sensor.
DHT dht(DHTPin, DHTTYPE);                

float Temperature;
float Humidity;


//initialisation class HCSR04 (trig pin , echo pin)
HCSR04 hcsr04(Trigpin, Echopin, 20, 4000);



//Define FirebaseESP8266 data object
FirebaseData firebaseData;

FirebaseJson json;

void setup() {
  Serial.begin(9600);
  delay(100);

  pinMode(DHTPin, INPUT);
  pinMode(LEDpin, OUTPUT);
  pinMode(Motorpin, OUTPUT);
  pinMode(Relaypin, OUTPUT);

  dht.begin();            

  Serial.println("Connecting to ");
  Serial.println(ssid);

  //connect to wi-fi network
  WiFi.begin(ssid, password);

  //check wi-fi is connected
  while (WiFi.status() != WL_CONNECTED) {
  delay(1000);
  Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected..!");
  Serial.print("Got IP: ");  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

}

void loop() {
  sensorUpdate();
  String UID="";

  // get LED data from firebase and check it

  if (Firebase.getBool(firebaseData, "/LED")){
    Serial.print("  LED status  " );
    //Serial.println(LEDstatus);
    Serial.println(firebaseData.stringData());
    if (firebaseData.stringData()=="true") {
    digitalWrite(LEDpin, HIGH);
    }
  else {
    digitalWrite(LEDpin, LOW);
    }
  }

  // get Motor data from firebase and check it

  if (Firebase.getBool(firebaseData, "/Motor")){
    Serial.print("  Motor status  " );
    //Serial.println(LEDstatus);
    Serial.println(firebaseData.stringData());
    if (firebaseData.stringData()=="true") {
    digitalWrite(Motorpin, LOW);
    }
  else {
    digitalWrite(Motorpin, HIGH);
    }
  }

  // get Waterpump data from firebase and check it

  if (Firebase.getBool(firebaseData, "/Waterpump")){
    Serial.print("  Waterpump status  " );
    //Serial.println(LEDstatus);
    Serial.println(firebaseData.stringData());
    if (firebaseData.stringData()=="true") {
    digitalWrite(Relaypin, LOW);
    }
  else {
    digitalWrite(Relaypin, HIGH);
    }
  }

  delay(1000);

}


void sensorUpdate(){
  // Reading temperature / humidity
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  // Reading soil lvl
  float soilValue = analogRead(A0);

  //Reading distance in mm and converting to cm 
  float Waterlvl = hcsr04.distanceInMillimeters() / 10;
  Serial.println(F("WATER lvl in cm: "));
  Serial.println(Waterlvl);


  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) ) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  Serial.println(F("soil lvl: "));
  Serial.println(soilValue);

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("°C  ,"));

  // Send Waterlvl data to Firebase
  if (Firebase.setFloat(firebaseData, "/Waterlvl", Waterlvl))
  {
    Serial.println("PASSED");
    Serial.println("PATH: " + firebaseData.dataPath());
    Serial.println("TYPE: " + firebaseData.dataType());
    Serial.println("ETag: " + firebaseData.ETag());
    Serial.println("------------------------------------");
    Serial.println();
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }

  // Send soilValue data to Firebase
  if (Firebase.setFloat(firebaseData, "/Soil", soilValue))
  {
    Serial.println("PASSED");
    Serial.println("PATH: " + firebaseData.dataPath());
    Serial.println("TYPE: " + firebaseData.dataType());
    Serial.println("ETag: " + firebaseData.ETag());
    Serial.println("------------------------------------");
    Serial.println();
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }

  // Send Temperature data to Firebase
  if (Firebase.setFloat(firebaseData, "/Temperature", t))
  {
    Serial.println("PASSED");
    Serial.println("PATH: " + firebaseData.dataPath());
    Serial.println("TYPE: " + firebaseData.dataType());
    Serial.println("ETag: " + firebaseData.ETag());
    Serial.println("------------------------------------");
    Serial.println();
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }

  // Send Humidity data to Firebase
  if (Firebase.setFloat(firebaseData, "/Humidity", h))
  {
    Serial.println("PASSED");
    Serial.println("PATH: " + firebaseData.dataPath());
    Serial.println("TYPE: " + firebaseData.dataType());
    Serial.println("ETag: " + firebaseData.ETag());
    Serial.println("------------------------------------");
    Serial.println();
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }
}