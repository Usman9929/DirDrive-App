import React, { useState } from 'react';
import {
    View, Text, TextInput, StyleSheet,
    Pressable, ScrollView, Alert, Image
} from 'react-native';
import axios from 'axios';

const SUPPORT_ISSUES = [
    { id: '1', title: 'Payment Problem', icon: require('../../assets/icons/problem.png') },
    { id: '2', title: 'Ride Cancellation', icon: require('../../assets/icons/cancel.png') },
    { id: '3', title: 'Driver Behavior', icon: require('../../assets/icons/decision.png') },
    { id: '4', title: 'Safety Concern', icon: require('../../assets/icons/shield.png') },
    { id: '5', title: 'App Technical Issue', icon: require('../../assets/icons/danger.png') },
    { id: '6', title: 'Other Issue', icon: require('../../assets/icons/menu.png') },
];

const SupportCenterScreen = () => {
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [description, setDescription] = useState('');
    const API_URL = 'http://192.168.43.98:3000/supportIssues'; // Change for real device IP

    const submitSupportIssue = async () => {
        if (!selectedIssue || !description.trim()) {
            Alert.alert('Incomplete', 'Please select an issue and write a description.');
            return;
        }

        try {
            await axios.post(API_URL, {
                issueType: selectedIssue,
                description,
                createdAt: new Date().toISOString()
            });

            Alert.alert('Submitted', 'Thanks for contacting support.');
            setSelectedIssue(null);
            setDescription('');
        } catch (err) {
            console.error(err);
            Alert.alert('Error', 'Failed to submit support request.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>Support Center</Text>
            <Text style={styles.subText}>We're here to help you</Text>

            <Text style={styles.sectionTitle}>Common Issues</Text>

            <View style={styles.issuesGrid}>
                {SUPPORT_ISSUES.map((item) => (
                    <Pressable
                        key={item.id}
                        style={[
                            styles.issueButton,
                            selectedIssue === item.title && styles.selectedButton,
                        ]}
                        onPress={() => setSelectedIssue(item.title)}
                    >
                        <Image source={item.icon} style={styles.issueIcon} />
                        <Text
                            style={[
                                styles.issueText,
                                selectedIssue === item.title && styles.selectedText,
                            ]}
                        >
                            {item.title}
                        </Text>
                    </Pressable>
                ))}
            </View>

            <Text style={styles.describeTitle}>Describe Your Issue</Text>
            <TextInput
                style={[
                    styles.textArea,
                    !selectedIssue && styles.disabledTextArea, // gray out if no issue selected
                ]}
                placeholder={
                    selectedIssue
                        ? 'Please describe your issue in detail...'
                        : 'Please select an issue first'
                }
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                editable={!!selectedIssue} // disable if no issue selected
            />


            <Pressable style={styles.submitButton} onPress={submitSupportIssue}>
                <Text style={styles.submitText}>Submit Request</Text>
            </Pressable>

            <View style={styles.callBox}>
                <Text style={styles.callTitle}>Need Immediate Help?</Text>
                <Text style={styles.callText}>Our support team is available 24/7</Text>
                <Pressable style={styles.callButton}>
                    <Text style={styles.callButtonText}>📞 Call Support</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
    header: { fontSize: 22, fontWeight: 'bold' },
    subText: { color: '#777', marginBottom: 20 },
    sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
    describeTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10, marginTop: 30 },
    issuesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    issueButton: {
        width: '48%',
        backgroundColor: '#f2f2f2',
        marginVertical: 5,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    selectedButton: {
        backgroundColor: '#e0e8ff',
        borderColor: '#3c5fd6',
        borderWidth: 1,
    },
    issueText: { color: '#333', textAlign: 'center' },
    selectedText: { color: '#3c5fd6', fontWeight: 'bold' },
    issueIcon: {
        width: 30,
        height: 30,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    textArea: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
        height: 120,
    },
    submitButton: {
        backgroundColor: '#3c5fd6',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
    },
    callBox: {
        backgroundColor: '#eef5f5',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    callTitle: { fontWeight: 'bold', fontSize: 16 },
    callText: { color: '#555', marginBottom: 10 },
    callButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 6,
    },
    callButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SupportCenterScreen;
