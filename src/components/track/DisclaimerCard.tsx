import { View } from 'react-native';
import { AppText as Text } from '../ui/AppText';

type DisclaimerCardProps ={
  accessibilityLabel: string;
  name: string;
  description: string;
};

const DisclaimerCard = (props: DisclaimerCardProps) => {
  return(
      <View
          accessibilityRole="disclaimer"
          accessibilityLabel={props.accessibilityLabel}
          className=" mt-2 min-h-[100px] w-[100%] py-5 flex-row items-center justify-center active:opacity-80"
          style={{
              backgroundColor: '#acacac'
                }}
              >
                <View className="w-full flex-row items-center justify-between px-4">
                  <View className="flex-col justify-center flex-1">
                    <Text
                      className="text-[25px] font-light"
                      style={{
                        fontFamily: 'Georgia',
                        fontWeight: '300',
                        color: '#1F2933',
                      }}
                    >
                      {props.name}
                    </Text>
                    <Text
                      numberOfLines={5}
                      adjustsFontSizeToFit
                      className="text-[16px] justify-center"
                      style={{
                        fontFamily: 'Georgia',
                        fontWeight: '200',
                        color: '#1F2933',
                      }}
                    >
                      {props.description}
                    </Text>
                  </View>
                </View>
              </View>
  );
}

export default DisclaimerCard;