# UNIT TEST VỚI JEST + REACT NATIVE TESTING LIBRARY + SONARCLOUD ANALYSIS + INTEGRATE WITH GITHUB ACTION

## test
![Coverage](./coverage-badge.svg)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ClassyAlexking_Mobile-pitching&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=ClassyAlexking_Mobile-pitching)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-highlight.svg)](https://sonarcloud.io/summary/new_code?id=ClassyAlexking_Mobile-pitching)


## 📋 MỤC LỤC

1. [Tổng Quan](#tổng-quan)
2. [Lý Thuyết](#lý-thuyết)
3. [Cài Đặt và Cấu Hình](#cài-đặt-và-cấu-hình)
4. [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
5. [Hướng Dẫn Chạy Test](#hướng-dẫn-chạy-test)
6. [Chi Tiết Test Cases](#chi-tiết-test-cases)
7. [Kết Quả và Coverage](#kết-quả-và-coverage)
8. [Giới thiệu SonarCloud](#giới-thiệu-sonarcloud)
9. [Cài đặt SonarCloud](#cài-đặt-sonarcloud)
10. [Cấu hình GitHub Actions](#cấu-hình-github-actions)
11. [Cấu hình SonarCloud cho Project](#cấu-hình-sonarcloud-cho-project)
12. [Chạy Workflow và Kiểm tra Kết quả](#chạy-workflow-và-kiểm-tra-kết-quả)
13. [Troubleshooting](#troubleshooting)
14. [Best Practices](#best-practices)
15. [Tài Liệu Tham Khảo](#tài-liệu-tham-khảo)

---

## 📖 TỔNG QUAN

### Mục Đích

Phần 3 tập trung vào việc thực hiện **Unit Testing** cho ứng dụng React Native sử dụng:
- **Jest**: Framework testing cho JavaScript/TypeScript
- **React Native Testing Library**: Thư viện hỗ trợ test React Native components

### Mục Tiêu

- ✅ Hiểu rõ cách thiết lập Jest cho dự án Expo React Native
- ✅ Viết unit test cho màn hình OnboardingScreen
- ✅ Chạy và kiểm tra kết quả test
- ✅ Đạt coverage ≥ 50% (thực tế đạt 100%)

### Kết Quả Đạt Được

- **12 test cases** cho OnboardingScreen
- **100% coverage** cho OnboardingScreen.tsx
- Tất cả test cases đều **PASS**

---

## 🎓 LÝ THUYẾT

### 1. Unit Testing là gì?

**Unit Testing** là phương pháp kiểm thử từng đơn vị code (unit) một cách độc lập. Trong React Native:

- **Unit**: Có thể là một function, một component, hoặc một module nhỏ
- **Độc lập**: Mỗi test case không phụ thuộc vào test case khác
- **Nhanh**: Chạy trong vài giây, không cần device thật

### 2. Tại sao cần Unit Testing?

#### Lợi ích

1. **Phát hiện lỗi sớm**: Tìm bug ngay khi viết code
2. **Tự tin refactor**: Thay đổi code mà không sợ phá vỡ chức năng
3. **Tài liệu sống**: Test cases mô tả cách component hoạt động
4. **Làm việc nhóm**: Đảm bảo code của mọi người đều hoạt động đúng
5. **CI/CD**: Tích hợp vào pipeline tự động

#### Ví dụ thực tế

```typescript
// Không có test: Sợ thay đổi code
// Có test: Tự tin refactor
it('should navigate to Login when Skip is pressed', () => {
  // Test này đảm bảo chức năng vẫn hoạt động sau khi refactor
});
```

### 3. Jest Framework

**Jest** là testing framework được Facebook phát triển, đặc biệt phù hợp với React và React Native.

#### Đặc điểm

- ✅ **Zero configuration**: Có thể chạy ngay sau khi cài đặt
- ✅ **Snapshot testing**: So sánh output với snapshot đã lưu
- ✅ **Mock functions**: Dễ dàng mock dependencies
- ✅ **Coverage reports**: Tự động tạo báo cáo coverage
- ✅ **Watch mode**: Tự động chạy lại test khi code thay đổi

#### Cấu trúc Test Case

```typescript
describe('ComponentName', () => {
  beforeEach(() => {
    // Setup trước mỗi test
  });

  it('should do something', () => {
    // Arrange: Chuẩn bị dữ liệu
    const component = render(<Component />);
    
    // Act: Thực hiện hành động
    fireEvent.press(button);
    
    // Assert: Kiểm tra kết quả
    expect(component.getByText('Expected')).toBeTruthy();
  });
});
```

### 4. React Native Testing Library

**React Native Testing Library** cung cấp các utilities để test React Native components theo cách giống với cách người dùng tương tác.

#### Nguyên tắc

> "The more your tests resemble the way your software is used, the more confidence they can give you."

#### API chính

1. **`render()`**: Render component để test
   ```typescript
   const { getByText, getByTestId } = render(<Component />);
   ```

2. **Queries**: Tìm elements trong component
   - `getByText()`: Tìm theo text
   - `getByTestId()`: Tìm theo testID
   - `queryByText()`: Tìm (không throw error nếu không tìm thấy)
   - `findByText()`: Tìm async (chờ element xuất hiện)

3. **Fire Events**: Mô phỏng user interactions
   ```typescript
   fireEvent.press(button);
   fireEvent.changeText(input, 'text');
   ```

4. **Matchers**: Kiểm tra kết quả
   ```typescript
   expect(element).toBeTruthy();
   expect(mockFunction).toHaveBeenCalledWith('arg');
   ```

### 5. Mocking trong Jest

**Mocking** là kỹ thuật thay thế dependencies bằng fake implementations để test component độc lập.

#### Các loại Mock

1. **Function Mock**
   ```typescript
   const mockFn = jest.fn();
   mockFn('arg');
   expect(mockFn).toHaveBeenCalledWith('arg');
   ```

2. **Module Mock**
   ```typescript
   jest.mock('@react-navigation/native', () => ({
     useNavigation: () => ({ navigate: jest.fn() }),
   }));
   ```

3. **Component Mock**
   ```typescript
   jest.mock('../components/CustomButton', () => ({
     CustomButton: ({ title }) => <Text>{title}</Text>,
   }));
   ```

#### Tại sao cần Mock?

- **Isolation**: Test component độc lập, không phụ thuộc vào dependencies
- **Speed**: Mock nhanh hơn real implementations
- **Control**: Kiểm soát behavior của dependencies

---

## ⚙️ CÀI ĐẶT VÀ CẤU HÌNH

### 1. Cài Đặt Dependencies

#### Bước 1: Cài đặt Jest và Testing Libraries

```bash
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native @types/jest babel-jest react-test-renderer
```

#### Bước 2: Kiểm tra `package.json`

Đảm bảo các dependencies sau đã được thêm vào `devDependencies`:

```json
{
  "devDependencies": {
    "jest": "^29.7.0",
    "@testing-library/react-native": "^12.4.3",
    "@testing-library/jest-native": "^5.4.3",
    "@types/jest": "^29.5.11",
    "@types/react-test-renderer": "^18.0.7",
    "babel-jest": "^29.7.0",
    "react-test-renderer": "19.1.0"
  }
}
```

#### Bước 3: Thêm Scripts

Thêm các scripts sau vào `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 2. Cấu Hình Jest

Tạo file `jest.config.js` ở root của dự án:

```javascript
module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest-setup-preliminary.js'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  transform: {
    '^.+\\.(js|ts|tsx)$': ['babel-jest', { presets: ['babel-preset-expo'] }],
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
  ],
  coverageReporters: ['html', 'text', 'lcov'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
```

#### Giải thích cấu hình

- **`preset: 'react-native'`**: Sử dụng preset React Native cho Jest
- **`setupFiles`**: File chạy trước khi test (mock PixelRatio, Dimensions)
- **`setupFilesAfterEnv`**: File chạy sau khi test environment được setup
- **`transformIgnorePatterns`**: Bỏ qua transform cho các modules này
- **`collectCoverageFrom`**: Thu thập coverage từ các file này
- **`coverageReporters`**: Format của coverage report (html, text, lcov)
- **`testMatch`**: Pattern để tìm test files

### 3. Setup Files

#### `jest-setup-preliminary.js`

File này chạy **TRƯỚC** mọi thứ để mock các native modules:

```javascript
// Mock PixelRatio FIRST before anything else - MUST be hoisted
jest.mock('react-native/Libraries/Utilities/PixelRatio', () => {
  return {
    get: () => 2,
    getFontScale: () => 2,
    getPixelSizeForLayoutSize: (size) => size,
    roundToNearestPixel: (size) => Math.round(size),
  };
});

// Mock Dimensions
const mockDimensionsValue = { width: 375, height: 812 };
jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
  return {
    get: jest.fn(() => mockDimensionsValue),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
});
```

**Tại sao cần file này?**
- `PixelRatio` và `Dimensions` được sử dụng ngay khi module được load
- Phải mock TRƯỚC khi component import chúng

#### `jest-setup.js`

File này chạy **SAU** khi test environment được setup:

```javascript
// Mock NativeEventEmitter
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
  return jest.fn().mockImplementation(() => ({
    addListener: jest.fn(),
    removeListener: jest.fn(),
    removeAllListeners: jest.fn(),
  }));
});

// Extend jest-native matchers
import '@testing-library/jest-native/extend-expect';

// Override Dimensions after react-native is loaded
const ReactNative = require('react-native');
const mockDimensionsValue = { width: 375, height: 812 };
if (ReactNative.Dimensions) {
  ReactNative.Dimensions.get = jest.fn(() => mockDimensionsValue);
  ReactNative.Dimensions.addEventListener = jest.fn();
  ReactNative.Dimensions.removeEventListener = jest.fn();
}

// Mock các dependencies khác
jest.mock('react-native-gesture-handler', () => { /* ... */ });
jest.mock('@react-native-async-storage/async-storage', () => { /* ... */ });
jest.mock('react-native-reanimated', () => { /* ... */ });
jest.mock('expo-linear-gradient', () => { /* ... */ });
jest.mock('@expo/vector-icons', () => { /* ... */ });
jest.mock('react-native-safe-area-context', () => { /* ... */ });
```

### 4. Mock Files

#### `__mocks__/fileMock.js`

Mock cho các file assets (images, fonts, etc.):

```javascript
module.exports = '';
```

---

## 📁 CẤU TRÚC DỰ ÁN

```
btl/
├── __mocks__/
│   └── fileMock.js              # Mock cho assets
├── src/
│   ├── screens/
│   │   ├── OnboardingScreen.tsx # Component cần test
│   │   └── __tests__/
│   │       └── OnboardingScreen.test.tsx  # Test file
│   └── components/
│       └── CustomButton.tsx
├── jest.config.js               # Cấu hình Jest
├── jest-setup.js                # Setup file (chạy sau)
├── jest-setup-preliminary.js    # Setup file (chạy trước)
└── package.json                 # Dependencies và scripts
```

### Quy tắc đặt tên

- Test files: `ComponentName.test.tsx` hoặc `ComponentName.test.ts`
- Test files nằm trong thư mục `__tests__/` cùng cấp với component
- Hoặc cùng tên với component nhưng có extension `.test.tsx`

---

## 🚀 HƯỚNG DẪN CHẠY TEST

### 1. Chạy Test Cơ Bản

#### Bước 1: Mở Terminal

Mở PowerShell hoặc Command Prompt

#### Bước 2: Di chuyển đến thư mục dự án

```powershell
cd "C:\Users\ADMIN\OneDrive - y1zrr\251\Mobile\btl"
```

#### Bước 3: Chạy test

```powershell
npm test
```

#### Kết quả mong đợi

```
PASS  src/screens/__tests__/OnboardingScreen.test.tsx
  OnboardingScreen
    ✓ should render without crashing
    ✓ should display first page content correctly
    ✓ should call navigation when Skip button is pressed
    ✓ should navigate to next page when Next button is pressed
    ✓ should navigate back to previous page when Back button is pressed
    ✓ should display all features on second page
    ✓ should display all steps in "How it works" section
    ✓ should navigate to Login screen when Get Started button is pressed
    ✓ should display pagination dots correctly
    ✓ should change button text correctly on last page
    ✓ should display feature descriptions on second page
    ✓ should display step descriptions on second page

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
```

### 2. Chạy Test với Coverage

#### Bước 1: Chạy test với coverage

```powershell
npm run test:coverage
```

#### Bước 2: Xem kết quả trong terminal

Bạn sẽ thấy bảng coverage:

```
-------------------|---------|----------|---------|---------|
File               | % Stmts | % Branch | % Funcs | % Lines |
-------------------|---------|----------|---------|---------|
OnboardingScreen.tsx |   100   |   87.5   |   100   |   100   |
-------------------|---------|----------|---------|---------|
```

#### Bước 3: Mở HTML Coverage Report

```powershell
start coverage\lcov-report\index.html
```

**Hoặc:**
1. Mở File Explorer
2. Đi đến: `coverage\lcov-report\`
3. Double-click vào `index.html`

#### Xem chi tiết coverage

1. Click vào `src/screens/OnboardingScreen.tsx`
2. Xem source code với màu sắc:
   - **Dòng xanh lá**: Đã được test
   - **Dòng đỏ**: Chưa được test

### 3. Chạy Test ở Watch Mode

```powershell
npm run test:watch
```

**Chế độ này:**
- Tự động chạy lại test khi code thay đổi
- Hiển thị menu tương tác:
  - `a`: Chạy tất cả tests
  - `f`: Chạy chỉ tests failed
  - `q`: Thoát watch mode
  - `p`: Filter by filename pattern

### 4. Chạy Test Cụ Thể

#### Chạy một test file cụ thể

```powershell
npm test -- OnboardingScreen.test.tsx
```

#### Chạy test case cụ thể

```powershell
npm test -- -t "should render without crashing"
```

### 5. Clear Cache và Chạy Lại

Nếu gặp lỗi cache:

```powershell
npm test -- --clearCache
```

---

## 📝 CHI TIẾT TEST CASES

### Tổng Quan

File test: `src/screens/__tests__/OnboardingScreen.test.tsx`

**Tổng số test cases:** 12

### Cấu Trúc Test File

```typescript
// 1. Mock Dimensions (MUST be hoisted)
jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({ /* ... */ }));

// 2. Mock useNavigation hook
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({ /* ... */ }));

// 3. Import dependencies
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OnboardingScreen from '../OnboardingScreen';

// 4. Test suite
describe('OnboardingScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks trước mỗi test
  });

  // Test cases...
});
```

### Test Case 1: Component Renders Without Crashing

**Mục đích:** Đảm bảo component có thể render mà không bị crash

```typescript
it('should render without crashing', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Check if welcome title is rendered
  expect(getByText('Welcome to BKMindCare')).toBeTruthy();
});
```

**Giải thích:**
- `render()`: Render component OnboardingScreen
- `getByText()`: Tìm element có text "Welcome to BKMindCare"
- `expect().toBeTruthy()`: Kiểm tra element tồn tại

**Kết quả:** ✅ PASS

---

### Test Case 2: Display First Page Content Correctly

**Mục đích:** Kiểm tra nội dung trang đầu hiển thị đúng

```typescript
it('should display first page content correctly', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Check first page elements
  expect(getByText('Welcome to BKMindCare')).toBeTruthy();
  expect(
    getByText(
      /Stress is part of the Bach Khoa University's health journey/i
    )
  ).toBeTruthy();
  
  // Check buttons on first page
  expect(getByText('Skip')).toBeTruthy();
  expect(getByText('Next')).toBeTruthy();
});
```

**Giải thích:**
- Kiểm tra title "Welcome to BKMindCare" có hiển thị
- Kiểm tra description có chứa text về "Bach Khoa University"
- Kiểm tra buttons "Skip" và "Next" có hiển thị

**Kết quả:** ✅ PASS

---

### Test Case 3: Call Navigation When Skip Button is Pressed

**Mục đích:** Kiểm tra navigation được gọi khi nhấn Skip

```typescript
it('should call navigation when Skip button is pressed', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Find and press Skip button
  const skipButton = getByText('Skip');
  fireEvent.press(skipButton);
  
  // Verify navigation was called
  expect(mockNavigate).toHaveBeenCalledWith('Login');
});
```

**Giải thích:**
- `getByText('Skip')`: Tìm button "Skip"
- `fireEvent.press()`: Mô phỏng nhấn button
- `expect(mockNavigate).toHaveBeenCalledWith('Login')`: Kiểm tra navigation được gọi với route 'Login'

**Kết quả:** ✅ PASS

---

### Test Case 4: Navigate to Next Page When Next Button is Pressed

**Mục đích:** Kiểm tra có thể chuyển sang trang tiếp theo

```typescript
it('should navigate to next page when Next button is pressed', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Press Next button
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // After pressing Next, should show second page content
  expect(getByText('How it works')).toBeTruthy();
  expect(getByText('1-on-1 Counseling with Experts')).toBeTruthy();
  
  // Button should now say "Back" and "Get Started"
  expect(getByText('Back')).toBeTruthy();
  expect(getByText('Get Started')).toBeTruthy();
});
```

**Giải thích:**
- Nhấn button "Next"
- Kiểm tra nội dung trang 2 xuất hiện: "How it works", "1-on-1 Counseling with Experts"
- Kiểm tra buttons thay đổi: "Back" và "Get Started" thay vì "Skip" và "Next"

**Kết quả:** ✅ PASS

---

### Test Case 5: Navigate Back to Previous Page When Back Button is Pressed

**Mục đích:** Kiểm tra có thể quay lại trang trước

```typescript
it('should navigate back to previous page when Back button is pressed', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // First, go to second page
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // Verify we're on second page
  expect(getByText('How it works')).toBeTruthy();
  expect(getByText('1-on-1 Counseling with Experts')).toBeTruthy();
  expect(getByText('Back')).toBeTruthy();
  
  // Press Back button
  const backButton = getByText('Back');
  fireEvent.press(backButton);
  
  // Should be back on first page
  expect(getByText('Welcome to BKMindCare')).toBeTruthy();
  expect(getByText('Skip')).toBeTruthy();
  expect(getByText('Next')).toBeTruthy();
});
```

**Giải thích:**
- Đi đến trang 2
- Nhấn button "Back"
- Kiểm tra quay lại trang 1: "Welcome to BKMindCare", "Skip", "Next" xuất hiện

**Kết quả:** ✅ PASS

---

### Test Case 6: Display All Features on Second Page

**Mục đích:** Kiểm tra tất cả features được hiển thị

```typescript
it('should display all features on second page', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Navigate to second page
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // Check all feature titles are displayed
  expect(getByText('1-on-1 Counseling with Experts')).toBeTruthy();
  expect(getByText('Mental Health Assessment Tests')).toBeTruthy();
  expect(getByText('Self-Care Resources')).toBeTruthy();
});
```

**Giải thích:**
- Đi đến trang 2
- Kiểm tra 3 feature titles đều được tìm thấy

**Kết quả:** ✅ PASS

---

### Test Case 7: Display All Steps in "How it works" Section

**Mục đích:** Kiểm tra tất cả steps được hiển thị

```typescript
it('should display all steps in "How it works" section', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Navigate to second page
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // Check all step titles
  expect(getByText('Sign Up')).toBeTruthy();
  expect(getByText('Book Session')).toBeTruthy();
  expect(getByText('Get Support')).toBeTruthy();
});
```

**Giải thích:**
- Đi đến trang 2
- Kiểm tra 3 step titles đều được tìm thấy

**Kết quả:** ✅ PASS

---

### Test Case 8: Navigate to Login Screen When Get Started Button is Pressed

**Mục đích:** Kiểm tra navigation được gọi khi nhấn Get Started

```typescript
it('should navigate to Login screen when Get Started button is pressed', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Navigate to second page (last page)
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // Verify we're on the last page
  expect(getByText('Get Started')).toBeTruthy();
  
  // Press Get Started button
  const getStartedButton = getByText('Get Started');
  fireEvent.press(getStartedButton);
  
  // Verify navigation was called with 'Login'
  expect(mockNavigate).toHaveBeenCalledWith('Login');
});
```

**Giải thích:**
- Đi đến trang cuối (trang 2)
- Nhấn button "Get Started"
- Kiểm tra navigation được gọi với route 'Login'

**Kết quả:** ✅ PASS

---

### Test Case 9: Display Pagination Dots Correctly

**Mục đích:** Kiểm tra pagination dots được render

```typescript
it('should display pagination dots correctly', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Check that footer with pagination dots exists
  expect(getByText('Skip')).toBeTruthy();
  
  // Navigate to second page
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // Verify footer is still rendered
  expect(getByText('Back')).toBeTruthy();
  expect(getByText('Get Started')).toBeTruthy();
});
```

**Giải thích:**
- Kiểm tra footer (chứa pagination dots) được render bằng cách kiểm tra buttons

**Kết quả:** ✅ PASS

---

### Test Case 10: Change Button Text Correctly on Last Page

**Mục đích:** Kiểm tra button text thay đổi từ "Next" thành "Get Started"

```typescript
it('should change button text correctly on last page', () => {
  const { getByText, queryByText } = render(<OnboardingScreen />);
  
  // On first page, button should say "Next"
  expect(getByText('Next')).toBeTruthy();
  expect(queryByText('Get Started')).toBeNull();
  
  // Navigate to second page (last page)
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // On last page, button should say "Get Started" instead of "Next"
  expect(getByText('Get Started')).toBeTruthy();
  expect(queryByText('Next')).toBeNull();
});
```

**Giải thích:**
- Ở trang đầu: Button hiển thị "Next", không có "Get Started"
- Ở trang cuối: Button thay đổi thành "Get Started", không còn "Next"
- `queryByText()`: Tìm element nhưng không throw error nếu không tìm thấy

**Kết quả:** ✅ PASS

---

### Test Case 11: Display Feature Descriptions on Second Page

**Mục đích:** Kiểm tra tất cả feature descriptions được hiển thị

```typescript
it('should display feature descriptions on second page', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Navigate to second page
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // Check all feature descriptions are displayed
  expect(
    getByText(/Schedule private sessions with experienced counselors/i)
  ).toBeTruthy();
  expect(
    getByText(/Check in with yourself through professional questionnaires/i)
  ).toBeTruthy();
  expect(
    getByText(/Explore helpful videos and exercises/i)
  ).toBeTruthy();
});
```

**Giải thích:**
- Đi đến trang 2
- Kiểm tra 3 feature descriptions đều được tìm thấy
- Sử dụng regex (`/pattern/i`) để tìm text không cần chính xác 100%

**Kết quả:** ✅ PASS

---

### Test Case 12: Display Step Descriptions on Second Page

**Mục đích:** Kiểm tra tất cả step descriptions được hiển thị

```typescript
it('should display step descriptions on second page', () => {
  const { getByText } = render(<OnboardingScreen />);
  
  // Navigate to second page
  const nextButton = getByText('Next');
  fireEvent.press(nextButton);
  
  // Check all step descriptions are displayed
  expect(
    getByText(/Create your free account in minutes/i)
  ).toBeTruthy();
  expect(
    getByText(/Choose your counselor, pick a time/i)
  ).toBeTruthy();
  expect(
    getByText(/Connect with your therapist through video/i)
  ).toBeTruthy();
});
```

**Giải thích:**
- Đi đến trang 2
- Kiểm tra 3 step descriptions đều được tìm thấy
- Sử dụng regex để tìm text

**Kết quả:** ✅ PASS

---

## 📊 KẾT QUẢ VÀ COVERAGE

### Kết Quả Test

```
Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        5-9 seconds
```

**Tất cả 12 test cases đều PASS** ✅

### Coverage Report

#### OnboardingScreen.tsx

```
-------------------|---------|----------|---------|---------|
File               | % Stmts | % Branch | % Funcs | % Lines |
-------------------|---------|----------|---------|---------|
OnboardingScreen.tsx |   100   |   87.5   |   100   |   100   |
-------------------|---------|----------|---------|---------|
```

**Giải thích các chỉ số:**

- **% Stmts (Statements)**: 100%
  - 100% câu lệnh trong file được test
  - Mục tiêu: ≥ 50% ✅

- **% Branch**: 87.5%
  - 87.5% nhánh logic (if/else, ternary) được test
  - Một số edge cases chưa được test (ví dụ: scrollViewRef.current là null)

- **% Funcs (Functions)**: 100%
  - 100% hàm được test
  - Tất cả functions: `handleNext`, `handleBack`, `handleSkip`, `renderPage` đều được test

- **% Lines**: 100%
  - 100% dòng code được test
  - Mục tiêu: ≥ 50% ✅

#### Tổng Coverage của Dự Án

```
All files          |    2.74 |     4.55 |    2.54 |    2.87 |
```

**Lưu ý:** Coverage tổng thấp vì chỉ test OnboardingScreen. Các màn hình khác chưa có test.

### HTML Coverage Report

#### Cách xem

1. Chạy: `npm run test:coverage`
2. Mở: `coverage/lcov-report/index.html`
3. Click vào `src/screens/OnboardingScreen.tsx`

#### Ý nghĩa màu sắc

- **Xanh lá**: Dòng code đã được test
- **Đỏ**: Dòng code chưa được test
- **Vàng**: Dòng code được test một phần (một số nhánh chưa test)

---

## 🎯 GIỚI THIỆU SONARCLOUD

### SonarCloud là gì?

**SonarCloud** là dịch vụ cloud-based giúp phân tích chất lượng code tự động, cung cấp:

- ✅ **Code Quality Analysis**: Phát hiện bug, lỗi bảo mật
- ✅ **Code Coverage**: Theo dõi test coverage
- ✅ **Code Smells**: Phát hiện code không tối ưu
- ✅ **Security Vulnerabilities**: Cảnh báo lỗ hổng bảo mật
- ✅ **Technical Debt**: Đánh giá độ phức tạp và nợ kỹ thuật

### Tại sao cần tích hợp SonarCloud?

1. **Continuous Inspection**: Kiểm tra chất lượng code liên tục
2. **Quality Gates**: Đặt tiêu chuẩn chất lượng bắt buộc
3. **Pull Request Analysis**: Phân tích code trước khi merge
4. **Trend Analysis**: Theo dõi xu hướng chất lượng code
5. **Team Collaboration**: Toàn team có thể xem và cải thiện code

---

## ⚙️ CÀI ĐẶT SONARCLOUD

### Bước 1: Tạo tài khoản SonarCloud

1. Truy cập: https://sonarcloud.io/
2. Đăng nhập bằng **GitHub account**
3. Authorize SonarCloud truy cập vào GitHub repositories

### Bước 2: Cài đặt SonarCloud GitHub App

1. Vào **Organization Settings** trên SonarCloud
2. Chọn **GitHub App Integration**
3. Click **Install GitHub App**
4. Chọn repositories hoặc **All repositories**

### Bước 3: Tạo Organization và Project

1. **Tạo Organization** (nếu chưa có):
   - Tên: `your-github-username` (tự động từ GitHub)
   
2. **Tạo Project**:
   - Chọn repository: `btl-react-native`
   - Key: sẽ tự động tạo
   - Display Name: `BTL React Native - MindCare App`

---

## 🚀 CẤU HÌNH GITHUB ACTIONS

### Bước 1: Tạo GitHub Secrets

Trong repository GitHub:

1. Vào **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**

**Thêm các secrets sau:**

| Secret Name | Value | Lấy từ đâu |
|-------------|-------|------------|
| `SONAR_TOKEN` | SonarCloud token | SonarCloud → My Account → Security |
| `EXPO_TOKEN` | Expo access token (nếu cần) | `expo login` và `expo token` |

### Bước 2: Tạo Workflow File

Tạo file `.github/workflows/sonarcloud.yml`:

```yaml
name: SonarCloud Analysis

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:  # Cho phép chạy thủ công

jobs:
  test-and-analyze:
    name: Test and Analyze
    runs-on: ubuntu-latest
    
    steps:
      # Bước 1: Checkout code
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Cần thiết để SonarCloud phân tích đầy đủ
      
      # Bước 2: Setup Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      # Bước 3: Cache node_modules
      - name: Cache node modules
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      
      # Bước 4: Install dependencies
      - name: Install dependencies
        run: npm ci
      
      # Bước 5: Run tests with coverage
      - name: Run tests with coverage
        run: npm run test:coverage
      
      # Bước 6: Upload coverage reports (nếu có)
      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        if: success()
        with:
          files: ./coverage/lcov.info
          fail_ci_if_error: false
      
      # Bước 7: SonarCloud Scan
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

### Bước 4: Cập nhật package.json Scripts

Thêm script ESLint (nếu chưa có):

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/**/*.{ts,tsx}",
    "lint:fix": "eslint src/**/*.{ts,tsx} --fix",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.13.1",
    "@typescript-eslint/parser": "^6.13.1",
    "eslint": "^8.54.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-native": "^4.1.0"
  }
}
```

---

## ⚙️ CẤU HÌNH SONARCLOUD CHO PROJECT

### Tạo `sonar-project.properties`

Tạo file `sonar-project.properties` ở root project:

```properties
# SonarCloud project identification
sonar.projectKey=your-organization_btl-react-native
sonar.organization=your-organization

# Project metadata
sonar.projectName=BTL React Native - MindCare App
sonar.projectVersion=1.0.0

# Source code location
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.test.tsx,**/*.test.ts
sonar.exclusions=node_modules/**,**/*.d.ts,coverage/**

# Language and encoding
sonar.language=js
sonar.sourceEncoding=UTF-8

# Test coverage
sonar.javascript.lcov.reportPaths=coverage/lcov.info

# TypeScript configuration
sonar.typescript.tsconfigPath=tsconfig.json

# Quality Gate timeout (in minutes)
sonar.qualitygate.wait=true
sonar.qualitygate.timeout=10
```

---

## 🚀 CHẠY WORKFLOW VÀ KIỂM TRA KẾT QUẢ

### Bước 1: Commit và Push Code

```bash
# Thêm các file mới
git add .github/ package.json sonar-project.properties

# Commit
git commit -m "feat: add SonarCloud integration and GitHub Actions workflow"

# Push lên GitHub
git push origin main
```

### Bước 2: Kiểm tra GitHub Actions

1. Vào GitHub repository
2. Click tab **Actions**
3. Xem workflow đang chạy

**Expected Result:**
- ✅ Test job: PASS
- ✅ SonarCloud job: PASS

### Bước 3: Kiểm tra SonarCloud

1. Vào https://sonarcloud.io/
2. Chọn project **BTL React Native - MindCare App**
3. Xem **Dashboard** với các metrics:
   - **Reliability**: A (0 bugs)
   - **Security**: A (0 vulnerabilities)
   - **Maintainability**: A (code smells)
   - **Coverage**: 100% (cho OnboardingScreen)

### Bước 4: Xem Chi tiết trên SonarCloud

#### Tab "Issues"
- **Bugs**: Lỗi nghiêm trọng có thể gây crash
- **Vulnerabilities**: Lỗ hổng bảo mật
- **Code Smells**: Code không tối ưu

#### Tab "Measures"
- **Coverage**: Test coverage theo file
- **Duplications**: Code bị duplicate
- **Size**: Số dòng code

#### Tab "Code"
- Xem source code với highlight các vấn đề
- Mỗi dòng có issue sẽ có icon cảnh báo

---

## 🔧 TROUBLESHOOTING

### Lỗi 1: `TypeError: Cannot read properties of undefined (reading 'get')`

**Nguyên nhân:** `PixelRatio` hoặc `Dimensions` chưa được mock đúng cách

**Giải pháp:**
1. Đảm bảo `jest-setup-preliminary.js` có mock `PixelRatio` và `Dimensions`
2. Kiểm tra `jest.config.js` có `setupFiles: ['<rootDir>/jest-setup-preliminary.js']`

### Lỗi 2: `TypeError: Object.defineProperty called on non-object`

**Nguyên nhân:** Conflict với `jest-expo` preset

**Giải pháp:**
- Sử dụng `preset: 'react-native'` thay vì `preset: 'jest-expo'`
- Hoặc remove `jest-expo` khỏi `devDependencies`

### Lỗi 3: `new NativeEventEmitter() requires a non-null argument`

**Nguyên nhân:** React Native Testing Library cần `NativeEventEmitter` được mock

**Giải pháp:**
- Thêm mock `NativeEventEmitter` vào `jest-setup.js`:

```javascript
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
  return jest.fn().mockImplementation(() => ({
    addListener: jest.fn(),
    removeListener: jest.fn(),
    removeAllListeners: jest.fn(),
  }));
});
```

### Lỗi 4: `StyleSheet.create()` gây lỗi

**Nguyên nhân:** `StyleSheet.create()` cần `PixelRatio` nhưng chưa được mock kịp

**Giải pháp:**
- Thay `StyleSheet.create()` bằng plain object styles:

```typescript
// Thay vì:
const styles = StyleSheet.create({ ... });

// Dùng:
const styles: any = { ... };
```

### Lỗi 5: Test không tìm thấy element

**Nguyên nhân:** 
- Text không khớp chính xác
- Element chưa được render
- Component chưa được mock đúng

**Giải pháp:**
1. Sử dụng `queryByText()` thay vì `getByText()` để debug
2. Kiểm tra component có render đúng không
3. Sử dụng regex để tìm text: `getByText(/pattern/i)`

### Lỗi 6: Mock không hoạt động

**Nguyên nhân:** Mock được định nghĩa sau khi component import

**Giải pháp:**
- Đảm bảo mock được hoisted (đặt ở đầu file, trước imports)
- Sử dụng `jest.mock()` thay vì `jest.spyOn()`

---

### Lỗi 7: "No coverage information will be saved because all tests were ignored"

**Nguyên nhân:** Jest không tạo được coverage report

**Giải pháp:**
1. Kiểm tra `jest.config.js`:
   ```javascript
   collectCoverageFrom: [
     'src/**/*.{ts,tsx}',
     '!src/**/*.d.ts',
     '!src/**/__tests__/**',
   ],
   ```
2. Đảm bảo test chạy thành công
3. Kiểm tra file `coverage/lcov.info` tồn tại

### Lỗi 8: SonarCloud không tìm thấy coverage report

**Giải pháp:**
Thêm path cụ thể trong workflow:
```yaml
- name: SonarCloud Scan
  uses: SonarSource/sonarcloud-github-action@master
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
  with:
    args: >
      -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
```

## 💡 BEST PRACTICES

### 1. Viết Test Trước Khi Code (TDD)

**Test-Driven Development:**
1. Viết test trước
2. Chạy test (sẽ fail)
3. Viết code để pass test
4. Refactor

**Lợi ích:**
- Code được thiết kế tốt hơn
- Test coverage cao hơn
- Tự tin refactor

### 2. Test User Behavior, Không Test Implementation

**❌ Không nên:**
```typescript
// Test implementation details
expect(component.state.currentPage).toBe(1);
```

**✅ Nên:**
```typescript
// Test user behavior
expect(getByText('How it works')).toBeTruthy();
```

### 3. Sử dụng Descriptive Test Names

**❌ Không nên:**
```typescript
it('test 1', () => { ... });
it('works', () => { ... });
```

**✅ Nên:**
```typescript
it('should navigate to Login screen when Get Started button is pressed', () => { ... });
it('should display all features on second page', () => { ... });
```

### 4. Mỗi Test Case Chỉ Test Một Thing

**❌ Không nên:**
```typescript
it('should do everything', () => {
  // Test navigation
  // Test rendering
  // Test button clicks
  // ...
});
```

**✅ Nên:**
```typescript
it('should navigate when Skip is pressed', () => { ... });
it('should render welcome title', () => { ... });
it('should display buttons', () => { ... });
```

### 5. Sử dụng `beforeEach` để Setup

```typescript
describe('Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks trước mỗi test
  });
  
  it('test 1', () => { ... });
  it('test 2', () => { ... });
});
```

### 6. Mock Dependencies Đúng Cách

**✅ Nên:**
```typescript
// Mock ở đầu file, trước imports
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));
```

**❌ Không nên:**
```typescript
// Mock trong test case
it('test', () => {
  jest.mock('module'); // Sẽ không hoạt động
});
```

### 7. Sử dụng `queryBy*` Khi Element Có Thể Không Tồn Tại

```typescript
// getByText() sẽ throw error nếu không tìm thấy
expect(getByText('Text')).toBeTruthy();

// queryByText() trả về null nếu không tìm thấy
expect(queryByText('Text')).toBeNull();
```

### 8. Test Edge Cases

```typescript
// Test normal case
it('should work normally', () => { ... });

// Test edge cases
it('should handle empty data', () => { ... });
it('should handle null values', () => { ... });
it('should handle maximum values', () => { ... });
```

### 9. Giữ Test Độc Lập

Mỗi test case không nên phụ thuộc vào test case khác:

```typescript
describe('Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset state
  });
  
  it('test 1', () => {
    // Test này không phụ thuộc vào test 2
  });
  
  it('test 2', () => {
    // Test này không phụ thuộc vào test 1
  });
});
```

### 10. Sử dụng Coverage Report Để Tìm Gaps

1. Chạy `npm run test:coverage`
2. Xem HTML report
3. Tìm dòng code chưa được test (màu đỏ)
4. Viết test case để cover dòng đó

---

## 🎯 BADGES CHO README

### Thêm Badges vào README.md

![alt text](image.png)

Vào SonarCloud Project -> Chọn Information -> Chọn cái Badge

---

## 📚 TÀI LIỆU THAM KHẢO

### Official Documentation

1. **Jest Documentation**
   - URL: https://jestjs.io/docs/getting-started
   - Nội dung: Hướng dẫn sử dụng Jest

2. **React Native Testing Library**
   - URL: https://callstack.github.io/react-native-testing-library/
   - Nội dung: API và best practices

3. **Testing Library Queries**
   - URL: https://testing-library.com/docs/queries/about/
   - Nội dung: Các cách query elements

4. **SonarCloud Issues**: 
   - Documentation: https://docs.sonarcloud.io/
   - Community: https://community.sonarsource.com/

### Video Tutorials

1. **Jest Crash Course**
   - Tìm trên YouTube: "Jest Crash Course"

2. **React Native Testing**
   - Tìm trên YouTube: "React Native Testing Library Tutorial"

### Articles

1. **Unit Testing Best Practices**
   - Tìm: "JavaScript Unit Testing Best Practices"

2. **Mocking in Jest**
   - Tìm: "Jest Mocking Guide"

---

## ✅ TỔNG KẾT

### Đã Hoàn Thành

- ✅ Cài đặt Jest và React Native Testing Library
- ✅ Cấu hình Jest cho dự án Expo React Native
- ✅ Viết 12 test cases cho OnboardingScreen
- ✅ Đạt 100% coverage cho OnboardingScreen.tsx
- ✅ Tất cả test cases đều PASS
- ✅ Tạo tài khoản SonarCloud và kết nối với GitHub
- ✅ Cấu hình GitHub Actions workflow
- ✅ Tạo SonarCloud project và Quality Gate
- ✅ Tạo badges cho README

### Kết Quả

- **12 test cases** ✅
- **100% coverage** (Lines) ✅
- **87.5% branch coverage** ✅
- **100% function coverage** ✅

### Kiến Thức Đã Học

1. ✅ Cách setup Jest cho Expo React Native
2. ✅ Cách mock native modules và dependencies
3. ✅ Cách viết unit test với React Native Testing Library
4. ✅ Cách test user interactions (button press, navigation)
5. ✅ Cách đọc và phân tích coverage report
6. ✅ Cách troubleshoot các lỗi thường gặp

### Next Steps

1. Viết test cho các màn hình khác (HomeScreen, LoginScreen, etc.)
2. Tích hợp vào CI/CD pipeline (GitHub Actions)
3. Thiết lập SonarCloud để phân tích code quality
4. Viết integration tests cho các flows phức tạp

---