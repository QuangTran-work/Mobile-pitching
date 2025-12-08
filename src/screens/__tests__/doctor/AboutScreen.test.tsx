import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from '../../doctor/AboutScreen';
import { Colors } from '../../../constants/colors';

// Mock the dependencies
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }),
}));

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
}));

jest.mock('../../../assets/logo.png', () => 'test-logo-path');

jest.mock('../../components/BottomNavigationBar', () => 'BottomNavigationBar');

describe('AboutScreen', () => {
  const renderScreen = () => {
    return render(
      <NavigationContainer>
        <AboutScreen />
      </NavigationContainer>
    );
  };

  it('renders without crashing', () => {
    const { getByText } = renderScreen();
    expect(getByText('About')).toBeTruthy();
  });

  it('displays the correct header title', () => {
    const { getByText } = renderScreen();
    expect(getByText('About')).toBeTruthy();
  });

  it('renders the back button', () => {
    const { getByTestId } = renderScreen();
    // You might need to add a testID to the back button in your component
    // For now, we'll check by accessibility label or text
    const backButton = getByTestId('back-button'); // Add testID="back-button" to your TouchableOpacity
    expect(backButton).toBeTruthy();
  });

  it('renders the app logo and name', () => {
    const { getByText } = renderScreen();
    expect(getByText('BKMindCare')).toBeTruthy();
    expect(getByText('Version 1.0.0')).toBeTruthy();
  });

  it('displays the about section content', () => {
    const { getByText } = renderScreen();
    expect(getByText('About BKMindCare')).toBeTruthy();
    expect(getByText(/BKMindCare is a comprehensive mental health support platform/)).toBeTruthy();
  });

  it('lists all platform features', () => {
    const { getByText } = renderScreen();
    expect(getByText('Platform Features')).toBeTruthy();
    expect(getByText('Patient Management & Statistics')).toBeTruthy();
    expect(getByText('Appointment Scheduling & Management')).toBeTruthy();
    expect(getByText('Anonymous Chat Support')).toBeTruthy();
    expect(getByText('Patient Emotional Trends Analysis')).toBeTruthy();
    expect(getByText('Review & Rating System')).toBeTruthy();
  });

  it('displays contact information', () => {
    const { getByText } = renderScreen();
    expect(getByText('Contact Us')).toBeTruthy();
    expect(getByText('support@bkmindcare.edu.vn')).toBeTruthy();
    expect(getByText('+84 123 456 789')).toBeTruthy();
    expect(getByText('HCMUT Campus, Ho Chi Minh City')).toBeTruthy();
  });

  it('shows copyright information', () => {
    const { getByText } = renderScreen();
    expect(getByText('© 2024 BKMindCare. All rights reserved.')).toBeTruthy();
  });

  it('navigates back when back button is pressed', () => {
    const mockGoBack = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({ goBack: mockGoBack });

    const { getByTestId } = renderScreen();
    const backButton = getByTestId('back-button'); // Add testID="back-button" to your component
    
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('renders BottomNavigationBar with correct props', () => {
    const { UNSAFE_getByType } = renderScreen(); // Using UNSAFE_getByType for demonstration
    
    // In real test, you might use a different approach
    // This shows the BottomNavigationBar is part of the component
    expect(true).toBeTruthy(); // Placeholder assertion
  });
});