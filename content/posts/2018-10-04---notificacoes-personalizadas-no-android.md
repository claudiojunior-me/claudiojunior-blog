---
title: Notificações personalizadas no Android
date: "2018-10-04T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/notificacoes-personalizadas-no-android/"
category: "React Native"
tags:
  - "Javascript"
  - "React Native"
description: "Personalize as notificações recebidas pelo Firebase"
---

![unsplash.com](/media/photo-1522826645016-e8a834f4c37e.jpg)

Integrar um projeto React Native com o Cloud Messaging do Firebase é uma boa maneira de oferecer _push notifications_ de maneira rápida e relativamente fácil. Isso pode ser feito utilizando o [RN Firebase](https://rnfirebase.io/). Porém há casos onde pode ser necessário personalizar a notificação, seja pra aplicar uma imagem, uma cor de fundo, mostrar mais dados quando ela expandida, no caso do Android, e ai entra o uso de código nativo da plataforma.

Para estas personalização o RN Firebase ainda não tem suporte, portanto devemos faze-las manualmente, o que é relativamente simples. Para começar, crie um novo arquivo de _Service_ herdado de _FirebaseMessagingService_ dentro da raiz do seu projeto android _(no nosso caso, dentro de android/app/src/main/java/com/example)_:

```java
package com.example;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class NotificationMessagingService extends FirebaseMessagingService {
  private static final String TAG = "FirebaseMessaging";

  @Override
  public void onMessageReceived(RemoteMessage message) {
    sendNotification(message);
  }

  private void sendNotification(RemoteMessage remoteMessage) {
    RemoteMessage.Notification notification = remoteMessage.getNotification();
    Intent intent = new Intent(this, MainActivity.class);
    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
    PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent,
            PendingIntent.FLAG_ONE_SHOT);

    Uri defaultSoundUri= RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);

    NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this, "notify_001")
            .setLargeIcon(BitmapFactory.decodeResource(getResources(),R.drawable.logo_gris))
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(remoteMessage.getData().get("title"))
            .setContentText(remoteMessage.getData().get("text"))
            .setAutoCancel(true)
            .setSound(defaultSoundUri)
            .setContentIntent(pendingIntent)
            .setGroup(remoteMessage.getData().get("group"))
            .addAction(0, remoteMessage.getData().get("actionLabel"), pendingIntent);

    NotificationManager notificationManager =
            (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationChannel channel = new NotificationChannel("notify_001",
              "Channel human readable title",
              NotificationManager.IMPORTANCE_DEFAULT);
      notificationManager.createNotificationChannel(channel);
    }

    notificationManager.notify(0, notificationBuilder.build());
  }
}
```

Nesse arquivo estamos fazendo o seguinte:

- Os dados recebidos através do Firebase são inflados dentro do objeto _**RemoteMessage**_

- Criamos uma nova notificação, ainda sem conteúdo, e setamos o Notification Channel:

```java
new NotificationCompat.Builder(this, "notify_001")
```

> A partir do Android 8.0 (API 26) se torna obrigatório a implementação de _Notification Channel_. Para saber mais sobre Notification Channel visite a [Documentação Oficial do Google](https://developer.android.com/training/notify-user/channels) ou [este artigo](https://medium.com/exploring-android/exploring-android-o-notification-channels-94cd274f604c).

![small_large_icon.png](https://files.readme.io/3c2fb44-android-notification-layouts.png)

- Setamos o ícone da notificação, geralmente se assemelha ao ícone do app:

```java
.setSmallIcon(R.mipmap.ic_launcher)
```

- O _largeIcon_ se refere a imagem que irá aparecer quando o notificação for expandida:

```java
.setLargeIcon(BitmapFactory.decodeResource(getResources(),R.drawable.logo_gris))
```

- Aqui setamos o _title_ e o _content_ da notificação:

```java
.setContentTitle(remoteMessage.getData().get("title"))
.setContentText(remoteMessage.getData().get("text"))
```

- Para ativar o modo de agrupamento de notificações - para agrupar notificações de um mesmo assunto, por exemplo - temos que setar um _id_ para o grupo:

```java
.setGroup(remoteMessage.getData().get("group"))
```

- E por fim é preciso criar um _NotificationManager_ para que seja possível criarmos uma nova notificação:

```java
NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
notificationManager.notify(0, notificationBuilder.build());
```

Por fim, precisamos registrar nosso service no _**AndroidManifest**_:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="br.com.example.app">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" tools:node="remove"/>

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
        android:launchMode="singleTop"
        android:windowSoftInputMode="adjustResize">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />

      <!-- Nosso Service de notificações -->
      <service android:name=".NotificationMessagingService">
        <intent-filter>
          <action android:name="com.google.firebase.MESSAGING_EVENT" />
        </intent-filter>
      </service>

    </application>

</manifest>
```

Tudo Pronto!! Já temos nossa notificação personalizada!!

![Photo by rawpixel on Unsplash](/media/rawpixel-676878-unsplash.webp)

Para mais informações acesse o [documentação oficial](https://developer.android.com/guide/topics/ui/notifiers/notifications).
