import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-router.module';
import { HomeModule } from './home';

/**
 * 导入其他模块时：
 *  如果是组件、指令或管道，那么需要在每个使用的模块都进行导入
 *  如果是服务，或者只用到了服务，那么一般来说在跟模块中导入一次即可
 *
 *  CommonModule: 提供绑定、×ngIF和×ngFor等基础指令，
 *      基本上每个模块都需要导入它
 *  FormsModule/ReactiveFormsModule: 表单模块，
 *      需要在每个需要的模块导入
 *  
 *  HttpClientModule/BrowserAnimationsModule/
 *    NoopAnimationsModule/只提供服务的模块：
 *      只在根模块导入一次即可
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  /**
   * 在功能模块中定义子路由后，只要导入该模块，等同于在根路由中直接定义
   * 
   * 也就是说在 AppModule 中导入 HomeModule 的时候，
   *  由于 HomeModule 中导入了 HomeRoutingModule
   *  在 HomeRoutingModule 中定义的路由会合并到根路由表.
   * 
   *  相当于直接在根模块中定义下面的数组:
   * ```typescript
   * const routes = [{
   *   path: 'home',
   *   component: HomeContainerComponent
   * }]
   * ```
   */
  imports: [
    BrowserModule,FormsModule,SharedModule,AppRoutingModule,HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
