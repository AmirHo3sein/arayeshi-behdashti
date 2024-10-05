<script setup>
import ProfileEditModal from '../common/modals/ProfileEditModal.vue';
import ChangePasswordForm from '../forms/ChangePasswordForm.vue';
import LoginModal from "~/components/common/modals/LoginModal.vue";
import {useGeneralStore} from "~/store/cart";
import AddressModal from "~/components/common/modals/AddressModal.vue";

const cartStore = useGeneralStore()
</script>

<template>
  <section class="profile__menu pb-70 grey-bg">
    <div class="container">
      <div class="row">
        <div class="col-xxl-4 col-md-4">
          <div class="profile__menu-left bg-white">
            <h3 class="profile__menu-title"><i class="fa fa-list-alt"></i> منو</h3>
            <div class="profile__menu-tab">
              <div class="nav nav-tabs flex-column justify-content-start text-start" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-account-tab" data-bs-toggle="tab" data-bs-target="#nav-account"
                        type="button" role="tab" aria-controls="nav-account" aria-selected="true"><i
                    class="fa fa-user"></i> حساب کاربری
                </button>
                <button class="nav-link" id="nav-order-tab" data-bs-toggle="tab" data-bs-target="#nav-order"
                        type="button" role="tab" aria-controls="nav-order" aria-selected="false"><i
                    class="fa fa-file"></i>سفارش ها
                </button>
                <button class="nav-link"><i class="fa fa-sign-out"></i> خروج</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-8 col-md-8">
          <div class="profile__menu-right">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
                <div class="profile__info">
                  <div class="profile__info-top d-flex justify-content-between align-items-center">
                    <h3 class="profile__info-title">مشخصات حساب</h3>
                    <button class="profile__info-btn" type="button" data-bs-toggle="modal"
                            data-bs-target="#profile_edit_modal">
                      <i class="fa-regular fa-pen-to-square"></i> ویرایش حساب
                    </button>
                    <button class="profile__info-btn" type="button" data-bs-toggle="modal"
                            data-bs-target="#address_modal">
                      <i class="fa-regular fa-pen-to-square"></i> ثبت آدرس
                    </button>
                  </div>
                  <div class="profile__info-wrapper white-bg">
                    <div class="profile__info-item">
                      <p>نام</p>
                      <h4>ادمین</h4>
                    </div>
                    <div class="profile__info-item">
                      <p>تلفن</p>
                      <h4>123456789</h4>
                    </div>
                    <div class="profile__info-item">
                      <p>آدرس</p>
                      <h4>تهران - تهران</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab">
                <div class="order__info">
                  <div class="order__info-top d-flex justify-content-between align-items-center">
                    <h3 class="order__info-title">سفارش ها</h3>
                    <!--                    <button type="button" class="order__info-btn">-->
                    <!--                      <i class="fa-regular fa-trash-can"></i> Clear-->
                    <!--                    </button>-->
                  </div>
                  <div class="order__list white-bg table-responsive">
                    <table class="table">
                      <thead>
                      <tr>
                        <th scope="col">شماره سفارش</th>
                        <th scope="col">محصول</th>
                        <th scope="col">قیمت</th>
                        <th scope="col">نمایش</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in cartStore.cartProducts">
                        <td class="order__id">#{{ item.id }}</td>
                        <td>
                          <nuxt-link href="/product-details" class="order__title">{{ item.information.title }}
                          </nuxt-link>
                        </td>
                        <td>{{ item.price }}</td>
                        <td>
                          <nuxt-link href="/product-details" class="order__view-btn">بیشتر</nuxt-link>
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                <div class="password__change">
                  <div class="password__change-top">
                    <h3 class="password__change-title">Change Password</h3>
                  </div>
                  <div class="password__form white-bg">
                    <!-- form start -->
                    <change-password-form/>
                    <!-- form start -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <LoginModal/>

  <profile-edit-modal/>

  <AddressModal/>
</template>

