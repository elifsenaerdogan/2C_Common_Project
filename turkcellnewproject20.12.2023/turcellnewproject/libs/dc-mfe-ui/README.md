# dc-mfe-ui

Projelerde kullanılacak atom ve moleküllerin bulunduğu repo.

 

NOT: Generate ve run işlemlerini daha hızlı yapabilmek için VS code’unuza NX Console extension’ını indirebilirsiniz.

 

# Ön Gereksinimler

Nx hakkında: https://nx.dev/getting-started/intro

Nx-storybook hakkında: https://nx.dev/nx-api/storybook

* Nx (npm i -g nx)

* Nx-storybook (npm install -D @nx/storybook)

* Nx-storybook-ad11y addon (npm i -D @storybook/addon-a11y)

Paketlerinin kurulu olduğundan emin olunması gerekir.

 

# Atoms & Molecules

Atoms - İçerisinde atom componentleri (input, button, radio button vb.) barındırır.

Molecules - İçerisinde molekül componentleri (payment, card, tabs vb.) barındırır.

 

# Dosya düzeni

Klasör ve dosya isimleri kebab-case (hepsi küçük harf) düzeninde olmalıdır.

 

* Atoms

component-adi/

    types/

        component-interface.ts

        component-enums.ts

    atom-component-adi.module.scss

    atom-component-adi.spec.tsx

    atom-component-adi.tsx

    atom-component-adi.stories.tsx

 

* Molecules

component-adi/

    types/

        component-adi-interface.ts

        component-adi-enums.ts

    molecules-component-adi.module.scss

    molecules-component-adi.spec.tsx

    molecules-component-adi.tsx

    molecules-component-adi.stories.tsx

 

# CSS Class isimlendirmeleri

* Class isimleri camelCase düzeninde olmalı ve scss ile yazılmalıdır.

* Componentinizi en tepeden saran wrapper class ının adı,

    atom ise; a-trkclApp{ComponentAdi}

    molecules ise; m-trkclApp{ComponentAdi} düzeninde olmalıdır.

 

* Birbirlerini kapsayan class'lar nested yazılmalıdır.

    Örnek: a-wrapperName {

        &__content{}

 

        &--variantName{}

    }

* Renkler tanımlanmış olan renk kodlarından (@others/assets/styles/variables.scss) kullanılmalıdır.

* Ölçü birimi olarak rem kullanmalıdır.

 

# Yeni component generate etme

Aşağıdaki scripti doğru şekilde doldurup çalıştırılır veya NX Console dan generate > @nrwl/react:component seçeneği seçilip ilgili yerler doldurulup generate edilir.

`npx nx generate @nrwl/react:component --name={component-adi} --project=dc-mfe-ui --directory=/lib/{atoms || molecules}/ --style=scss --no-interactive --dry-run`

 

# Storybook dosyası generate etme

Generate edilmiş bir componente storybook dosyası generate etmek için aşağıdaki script doğru şekilde doldurulup çalıştırılabilir veya NX Console dan generate > nx generate @nrwl/react:component-story seçeneği seçilip ilgili yerler doldurulup generate edilir.

`npx nx generate @nrwl/react:component-story --componentPath=lib/{atoms || molecules}/component-adi/component-adi.tsx --project=dc-mfe-ui --no-interactive --dry-run `

 

* Storybook-Accessibility

Storybook’u ayağa kaldırdıktan sonra, componentinizin aşağıdaki Accesibility menüsünde görünen Violations maddeleri 0 olmalı, aksi halde hepsi Passes olana kadar iyileştirme yapılmalı.