import threading

class SingletonLogger:
    __instance = None
    __lock = threading.Lock()

    @staticmethod
    def get_instance():
        if SingletonLogger.__instance is None:
            with SingletonLogger.__lock:
                if SingletonLogger.__instance is None:
                    SingletonLogger.__instance = SingletonLogger()
        return SingletonLogger.__instance

    def __init__(self):
        if SingletonLogger.__instance is not None:
            raise Exception("This is a singleton class. Use 'get_instance()' to access the instance.")
        self.__log_data = []
        self.__log_lock = threading.Lock()

    def log(self, level, message):
        log_entry = f"{level.upper()}: {message}"
        with self.__log_lock:
            self.__log_data.append(log_entry)

    def get_logs(self):
        with self.__log_lock:
            return list(self.__log_data)