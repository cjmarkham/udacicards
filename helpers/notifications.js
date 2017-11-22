import {
  AsyncStorage,
} from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'udacicards:notifications';

export const scheduleNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let today = new Date();
              today.setHours(20);
              today.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                notificationData(),
                {
                  time: today,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}

const notificationData = () => ({
  title: 'Remember to revise',
  body: 'Don\'t forget to do some revision today',
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
});
