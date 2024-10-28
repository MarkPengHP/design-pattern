# design-pattern

## Creational Patterns

### Factory Pattern

工廠模式的適用情境：

當無法預先預測所需物件的具體類型時
當需要建立多個具有相似特徵的物件時
當希望將物件的實例化過程通用化，特別是物件設置的過程較為複雜

```txt
The Java API exposes several factory methods:

java.util.Calendar.getInstance()
java.util.ResourceBundle.getBundle()
java.text.NumberFormat.getInstance()
```

### Singleton Pattern

單例模式通常用於系統中需要單一物件來協調多個操作的情境。常見的使用場合包括：

服務（Services）：服務物件可以是單例，因為它們儲存狀態、配置，並提供資源的存取。對於應用程式中的服務來說，使用單一實例更有意義，避免多重服務實例導致的混亂。
資料庫連線（Databases）：對於資料庫連線（例如 MongoDB），通常使用單例模式來確保只有一個連線實例，減少連線資源消耗，並避免多重連線引起的衝突或性能問題。
配置（Configurations）：如果配置物件包含特定的配置參數，不需要每次使用該配置時都創建新的實例。單一實例可以提供一致的配置，避免多重配置造成的配置不一致性。

```txt
In the Java API we have the following singletons:
java.lang.Runtime
java.awt.Desktop
```

### Builder Pattern

當構建應用程式時需要創建複雜物件時，可以使用建造者模式。它可以幫助隱藏這些物件的建構過程。

一個很好的例子是 DOM，當你需要建立大量節點和屬性時，構建過程可能會變得相當混亂。遇到這樣的情況，可以使用建造者模式。
