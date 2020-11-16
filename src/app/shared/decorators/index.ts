
/**
 * 
 * 装饰器对类的行为的改变是代码编译时发生的，而不是在运行时。
 * 装饰器本质就是编译时执行的函数
 */
export function Emoji() {
    return function (target: object, key: string) {
        let val = target[key];
        const getter = () => {
            return val;
        }
        const setter = (value: string) => {
            val = `笑-${value}-笑`
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

/**
 * 与装饰类不同，对【类方法】的装饰器本质是操作其描述符
 * @param message 
 */
export function Confirmable(message: string) {
    /**
     * 
     * 此处target为类的【原型对象】，即方法Class.prototype
     * Key为要装饰的【方法/属性名】
     * descriptor为要修饰的方法/属性的【属性描述符】
     */
    return function (target: object, key: string, descripter: PropertyDescriptor) {
        const original = descripter.value;
        descripter.value = function (...args) {
            const allow = window.confirm(message);
            if (allow) {
                original.apply(this, ...args);
            }
            return null;
        }
        return descripter;
    }
}

/**
 * 当装饰的对象是【类】时，我们操作的就是这个类本身。
 * @param options 
 */
export const Service = (options: { name: string} ) => {
    return function (target) {
        target.serviceName = options.name;
        target.prototype.logger = () => console.info(`${target.serviceName} 被调用`);
    }
}