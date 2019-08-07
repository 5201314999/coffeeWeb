/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import { observer } from "mobx-react";
import { observable } from "mobx";
import themeControl from "../../common/theme";

@observer
export default class MenuPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      header: "选择咖啡与小食",
      imgs: [
        {
          imgUrl:
            "https://s2.luckincoffeecdn.com/luckywebrm/images/index/other/bg.png",
          target:
            "https://s2.luckincoffeecdn.com/luckywebrm/images/index/other/bg.png"
        },
        {
          imgUrl:
            "https://s2.luckincoffeecdn.com/luckywebrm/images/index/commitment/part2_picture2.png",
          target:
            "https://s2.luckincoffeecdn.com/luckywebrm/images/index/commitment/part2_picture2.png"
        },
        {
          imgUrl:
            "https://s2.luckincoffeecdn.com/luckywebrm/images/pimg/about/model.png",
          target:
            "https://s2.luckincoffeecdn.com/luckywebrm/images/pimg/about/model.png"
        }
      ],
      menuList: [
        {
          category: "top",
          name: "人气Top"
        },
        {
          category: "master",
          name: "大师咖啡"
        },
        {
          category: "tea",
          name: "小鹿茶"
        },
        {
          category: "lainabing",
          name: "瑞纳冰"
        },
        {
          category: "juice",
          name: "鲜榨果蔬汁"
        },
        {
          category: "drink",
          name: "经典饮品"
        },
        {
          category: "boss",
          name: "BOSS午餐"
        },
        {
          category: "health",
          name: "健康轻食"
        },
        {
          category: "lucky",
          name: "幸运小食1"
        },
        {
          category: "lucky",
          name: "幸运小食2"
        },
        {
          category: "lucky",
          name: "幸运小食3"
        },
        {
          category: "lucky",
          name: "幸运小食4"
        }
      ],
      categoryList: [
        {
          categoryName: "人气Top",
          desc: "",
          goodsList: [
            {
              goodsId: 1,
              goodsName: "焦糖玛奇朵",
              enName: "Caramel Macchiato",
              price: 27,
              originPrice: 27,
              tabContent: "充2赠1",
              props: [
                {
                  label: "规格",
                  name: "大",
                  cost: 0
                },
                {
                  label: "温度",
                  name: "冰"
                },
                {
                  label: "糖度",
                  name: "全糖(推荐)"
                }
              ]
            }
          ]
        },
        {
          categoryName: "大师咖啡",
          desc: "WBC(世界咖啡师大赛) 冠军团队拼配",
          goodsList: [
            {
              goodsId: 3,
              goodsName: "拿铁",
              enName: "Lattle",
              price: 27,
              originPrice: 27,
              tabContent: "充2赠1",
              props: [
                {
                  label: "规格",
                  name: "大",
                  cost: 0
                },
                {
                  label: "温度",
                  name: "冰"
                },
                {
                  label: "糖度",
                  name: "全糖(推荐)"
                }
              ]
            }
          ]
        }
      ],
      swiperOption: {
        autoplay: true
      }
    };
  }
  render() {
    const { styles } = obStyles
    const SwiperContent = this.state.imgs.map((e, index) => {
      return (
        <View key={index}>
          <Image source={{ uri: e.imgUrl }} style={{ height: "100%" }} />
        </View>
      );
    });
    const MenuContent = this.state.menuList.map((menu, index) => {
      return (
        <View key={index} style={styles.menu}>
          <Text style={styles.menuText}>{menu.name}</Text>
        </View>
      );
    });
    const goodContent = this.state.categoryList.map((category, index) => {
      return (
        <View key={index} style={styles.category}>
          <View style={styles.header}>
            <Text>{category.categoryName}</Text>
            {category.desc === "" ? (
              <View style={styles.splitLine} />
            ) : (
              <View style={styles.subContainer}>
                <Text style={styles.desc}>{category.desc}</Text>
                <View style={styles.splitLine} />
              </View>
            )}
          </View>
          {category.goodsList.map((good, index) => {
            <View key={index} style={styles.goodInfo}>
              <View style={styles.imgWrapper}>
                <Image source={{ uri: good.imgUrl }} />
                {good.tabContent ? (
                  <View class="">
                    <Text />
                  </View>
                ) : null}
              </View>
            </View>;
          })}
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.header}</Text>
          <Text style={styles.title}>{themeControl.background}</Text>
        </View>
        <View style={styles.swiperWrapper}>
          <Swiper loadMinimal {...this.state.swiperOption}>
            {SwiperContent}
          </Swiper>
        </View>
        <View style={styles.main}>
          <View style={styles.menuList}>{MenuContent}</View>
          <View style={styles.goodsContainer}>{goodContent}</View>
        </View>
      </View>
    );
  }
}

const obStyles =observable({
    get styles(){
     return StyleSheet.create({
      container: {
        flex: 1
      },
      header: {
        height: 50,
        justifyContent: "center",
        alignItems: "center"
      },
      title: {
        fontSize: 18,
        color: "#000",
        fontWeight: "400"
      },
      swiperWrapper: {
        height: 200
      },
      main: {
        flex: 1,
        flexDirection: "row"
      },
      menuList: {
        width: 130,
        height: "100%",
        overflow: "scroll"
      },
      goods: {
        flex: 1
      },
      menu: {
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc"
      },
      menuText: {
        padding: 10,
        backgroundColor: "#f7f7f7"
      },
      goodsContainer: {
        flex: 1,
        // backgroundColor:"#ffffff"
        backgroundColor: themeControl.background
      }
     });
  }
});

