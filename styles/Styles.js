import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    View1: {
        flex: 1,
        backgroundColor: '#254952',
    },
    SafeAreaView: {
        flex: 1,
        backgroundColor: '#254952',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 70,
    },
    Title: {
        fontFamily: 'AlfaSlabOne-Regular',
        fontSize: 36,
        color: '#E9E9E7',
    },
    SomeText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: '#E9E9E7',
    },
    SomeTextDark: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: '#1A1A1A',
    },
    SearchBar: {
        display: "flex",
        paddingBottom: 12,
        paddingTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 16,
        backgroundColor: '#E9E9E7',
        alignItems: "flex-start",
    },
    BrandText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 24,
        color: '#E9E9E7',
        marginTop: 10,
        marginBottom: 10,
    },
    ModelText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 16,
        color: '#E9E9E7',
        marginTop: 8,
        marginBottom: 8,
    },
    InsertFoto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#E9E9E7",
        backdropFilter: "blur(4px)",
        height: 250,
    },

});

export default styles;