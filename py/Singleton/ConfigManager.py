class ConfigManager:
    __instance = None

    @staticmethod
    def get_instance():
        if ConfigManager.__instance is None:
            ConfigManager.__instance = ConfigManager()
        return ConfigManager.__instance

    def __init__(self):
        if ConfigManager.__instance is not None:
            raise Exception("This is a singleton class. Use 'get_instance()' to access the instance.")
        self.config_data = {}

    def set_config(self, config_data):
        self.config_data.update(config_data)

    def get_config(self, key, default=None):
        return self.config_data.get(key, default)

if __name__ == "__main__":
    config1 = ConfigManager.get_instance()
    config1.set_config({"app_name": "MyApp", "version": "1.0"})

    print(f"app_name: {config1.get_config('app_name')}, version: {config1.get_config('version')}")

    config2 = ConfigManager.get_instance()
    config2.set_config({"app_name": "MyUpdatedApp", "version": "1.1"})

    if id(config1) == id(config2):
        print("Singleton works, both variables contain the same instance.")
    else:
        print("Singleton failed, variables contain different instances.")

    print(f"app_name: {config1.get_config('app_name')}, version: {config1.get_config('version')}")
