import { useEffect, useState } from "react";
import { Text, View, FlatList, Image, StyleSheet } from 'react-native'
import moment from 'moment'
import { getlistingQuery } from "../../apiServices/graphQl/getListing";

const ListCheckIn = () => {
    const [data, setData] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = async () => {
        setIsRefreshing(true)
        const response = await getlistingQuery()
        setData(response.data?.data?.check_in)
        setIsRefreshing(false)
    }
    const renderItem = ({ item }) => {
        const dateFormat = (moment(item?.created_at).format('Do [of] MMM YYYY'))
        return (
                <View style={styles.itemMainView}>
                    {item?.image_url ?
                        <Image source={{ uri: item?.image_url }} height={200} style={styles.image} />
                        :
                        <Image source={require('../../images/noImage.png')} height={200} style={[styles.image, { width: 200, height: 150, alignSelf: 'center' }]} />
                    }
                    <View style={styles.itemView}>
                        <Image source={require('../../images/noImage.png')} height={200} style={styles.icon} />
                        <View style={styles.itemView2}>
                            <Text style={styles.name}>{item?.name ? item?.name : 'No name found'}</Text>
                            <Text style={styles.date}>{dateFormat ? dateFormat : 'No date and time'}</Text>
                        </View>
                    </View>
                    <Text style={styles.comment}>{item?.comment ? item?.comment : 'No comments'}</Text>
                </View>
        )
    }
    return (
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                refreshing={isRefreshing}
                onRefresh={fetchingData}
                renderItem={renderItem}
                 ItemSeparatorComponent={()=><View style={styles.separator}/>}
                keyExtractor={({ id }) => id}
                contentContainerStyle={styles.contentContainerStyle}
            />
    )
}
export default ListCheckIn

const styles = StyleSheet.create({
    image: {
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 20
    },
    contentContainerStyle: {
        backgroundColor: '#F0F0F0',
         borderRadius: 10
         ,padding:20 
    },
    icon: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginLeft: 20,
        marginTop: 15,
    },
    itemView: {
        flexDirection: 'row',
    },
    itemView2: {
        marginTop: 15,
        marginHorizontal: 10
    },
    date: {
        color: '#3F2AD7'
    },
    name: {
        color: 'black'
    },
    comment: {
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 20
    },
    itemMainView: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    separator:{
        margin:10
    }
})