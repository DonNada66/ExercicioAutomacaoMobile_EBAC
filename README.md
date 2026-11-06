# Automação Mobile — WDIO Native Demo App

Projeto de automação de testes mobile desenvolvido com **WebdriverIO v9**, **Appium v3** (`UiAutomator2`) e **Mocha**, utilizando o padrão arquitetural **Page Object / Screen Object** sobre o aplicativo [WDIO Native Demo App](https://github.com/webdriverio/native-demo-app).

## Pré-requisitos

- **Node.js** (v20+)
- **Java JDK** configurado na variável de ambiente `JAVA_HOME`
- **Android Studio / Android SDK** configurado na variável de ambiente `ANDROID_HOME` (`platform-tools` e `emulator` no `PATH`)
- **Appium** com driver **UiAutomator2** instalado (`appium driver list`)
- **Emulador Android** configurado (padrão configurado no `wdio.conf.js`: `nightwatch-android-11`)
- **Appium Inspector** (opcional, para inspeção de elementos)

## Estrutura do Projeto

```text
projeto/
├── app/
│   └── wdio.apk                     # APK do WDIO Native Demo App
├── test/
│   ├── pageobjects/                 # Page / Screen Objects
│   │   ├── menu.page.js             # Navegação inferior e alertas nativos do Android
│   │   ├── login.page.js            # Tela de Login e Cadastro (Sign Up)
│   │   ├── forms.page.js            # Tela de Formulários (Forms)
│   │   ├── swipe.page.js            # Tela de Gestos de Swipe (horizontal e vertical)
│   │   └── drag.page.js             # Tela de Drag and Drop (quebra-cabeça)
│   └── specs/                       # Suítes de teste automatizadas
│       ├── login.spec.js            # Fluxos de Cadastro, Login válido e validações de erro
│       ├── forms.spec.js            # Fluxo completo de preenchimento de formulário
│       ├── swipe.spec.js            # Fluxos de carrossel horizontal e rolagem vertical
│       └── drag.spec.js             # Fluxo completo de montagem do quebra-cabeça
├── package.json
└── wdio.conf.js                     # Configurações do WebdriverIO + Appium + Emulador
```

## Estratégias de Localização Utilizadas

- **`accessibilityId` (`~elemento`)**: Estratégia principal para elementos mapeados com `testID`/`content-desc` no React Native (ex.: `~Login`, `~input-email`, `~button-LOGIN`, `~text-input`, `~switch`, `~Dropdown`, `~Carousel`, `~drag-l1`, `~drop-l1`).
- **`id` (`id=android:id/...`)**: Utilizada em componentes nativos do Android, como alertas e caixas de diálogo (`id=android:id/alertTitle`, `id=android:id/message`, `id=android:id/button1`).
- **`xpath` (`//android.widget...`)**: Utilizada quando o elemento não possui `accessibilityId` ou `id` exclusivo, como mensagens de validação de campos, títulos de tela e opções específicas do `Dropdown`.

## Como Executar os Testes

1. Instale as dependências (caso ainda não tenha instalado):
   ```bash
   npm install
   ```

2. Certifique-se de que o arquivo `wdio.apk` do [WDIO Native Demo App](https://github.com/webdriverio/native-demo-app/releases) esteja na pasta `app/wdio.apk` (já configurado no ambiente local).

3. Certifique-se de que o emulador Android está em execução:
   ```bash
   emulator -avd nightwatch-android-11
   ```

4. Execute toda a suíte de testes:
   ```bash
   npm test
   ```

5. Ou execute um fluxo específico individualmente:
   ```bash
   npm run test:login
   npm run test:forms
   npm run test:swipe
   npm run test:drag
   ```

