import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MemoList(props){
        return(
            <View style={styles.memoList}>

                <View style={styles.memoListItem}>
                  <View>
                    <Text style={styles.memoTitle}>講座のアイデア</Text>
                    <Text style={styles.memoDate}>2021/01/02</Text>
                  </View>
                  <View>
                    <Text style={styles.memoDelete}>×</Text>
                  </View>
                </View>

                <View style={styles.memoListItem}>
                  <View>
                    <Text style={styles.memoTitle}>講座のアイデア</Text>
                    <Text style={styles.memoDate}>2021/01/02</Text>
                  </View>
                  <View>
                    <Text style={styles.memoDelete}>×</Text>
                  </View>
                </View>

                <View style={styles.memoListItem}>
                  <View>
                    <Text style={styles.memoTitle}>講座のアイデア</Text>
                    <Text style={styles.memoDate}>2021/01/02</Text>
                  </View>
                  <View>
                    <Text style={styles.memoDelete}>×</Text>
                  </View>
                </View>

                                <View style={styles.memoListItem}>
                  <View>
                    <Text style={styles.memoTitle}>講座のアイデア</Text>
                    <Text style={styles.memoDate}>2021/01/02</Text>
                  </View>
                  <View>
                    <Text style={styles.memoDelete}>×</Text>
                  </View>
                </View>       
            </View>  
        );
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
      },
    
      memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    
      memoTitle: {
        fontSize: 18,
        marginBottom: 4,
      },
    
      memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
      },

      memoDelete: {
        fontSize: 20,
        marginRight: 10,
        color: '#999',
      }

});

export default MemoList;