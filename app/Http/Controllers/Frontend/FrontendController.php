<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Mail\ContactRealsateAgentMail;
use App\Mail\UserContactMail;
use App\Models\City;
use App\Models\ContactRealsateAgent;
use App\Models\Listing;
use App\Models\Rental;
use App\Models\User;
use App\Models\UserContact;
use App\Services\ListingService;
use App\Services\RentalService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
     public function __construct(private ListingService $service, private RentalService $rentalService) {}

     public function index(): Response
     {
          $listings =  $this->service->getPaginatedDatas(
               perPage: 8,
               // filters: []
          );
          return Inertia::render('frontend/index', ['listings' => $listings]);
     }
     public function partnerProgram(): Response
     {
          return Inertia::render('frontend/partnerProgram');
     }
     public function livingInBristol(): Response
     {
          return Inertia::render('frontend/livingInBristol');
     }
     public function rentingTennessee(): Response
     {
          return Inertia::render('frontend/rentingTennessee');
     }

     public function livingInChattanooga(): Response
     {
          return Inertia::render('frontend/living-in-chattanooga');
     }

     public function homesForSale(Request $request): Response
     {
          $filters = $request->only([
               'search',
               'city',
               'price_min',
               'price_max',
               'bedrooms',
               'bathrooms',
               // 'sqft_min',
               'square_feet',
               'property_type'
          ]);

          $listings = $this->service->getPaginatedDatas(
               perPage: 6,
               filters: $filters
          );

          $cities = City::orderBy('name')->get();

          return Inertia::render('frontend/homes-for-sale', [
               'listings' => $listings,
               'cities' => $cities,
               'filters' => $filters
          ]);
     }
     public function movingChecklist(): Response
     {
          return Inertia::render('frontend/moving-checklist');
     }
     public function rentals(Request $request): Response
     {

          $filters = $request->only([
               'search',
               'city',
               'price_min',
               'price_max',
               'bedrooms',
               'bathrooms',
               // 'sqft_min',
               'square_feet',
               'property_type'
          ]);
          $cities = City::all();

          $rentals = $this->rentalService->getPaginatedDatas(
               perPage: 6,
               filters: $filters
          );
          return Inertia::render('frontend/rentals', [
               'rentals' => $rentals,
               'filters' => $filters,
               'cities' => $cities
          ]);
     }
     public function cityComparison(): Response
     {
          return Inertia::render('frontend/city-comparison');
     }
     // public function realEstateAgents(): Response
     // {
     //      $owners =  User::where('user_type', 'property_owner')->get();
     //      $realtors =  User::where('user_type', 'realtor')->get();
     //      $boths =  User::where('user_type', 'both')->get();

     //      return Inertia::render('frontend/real-estate-agents', [
     //           'owners' => $owners,
     //           'realtors' => $realtors,
     //           'boths' => $boths
     //      ]);
     // }
     public function realEstateAgents(): Response
     {
          // Get users and encrypt their IDs
          $owners = User::where('user_type', 'property_owner')
               ->get()
               ->map(function ($user) {
                    return [
                         'id' => Crypt::encryptString($user->id),
                         'name' => $user->name,
                         'email' => $user->email,
                         'phone' => $user->phone,
                         'image_url' => $user->image_url,
                         'your_self' => $user->your_self,

                    ];
               });

          $realtors = User::where('user_type', 'realtor')
               ->get()
               ->map(function ($user) {
                    return [
                         'id' => Crypt::encryptString($user->id),
                         'name' => $user->name,
                         'email' => $user->email,
                         'phone' => $user->phone,
                         'image_url' => $user->image_url,
                         'your_self' => $user->your_self,
                    ];
               });

          $boths = User::where('user_type', 'both')
               ->get()
               ->map(function ($user) {
                    return [
                         'id' => Crypt::encryptString($user->id),
                         'name' => $user->name,
                         'email' => $user->email,
                         'phone' => $user->phone,
                         'image_url' => $user->image_url,
                         'your_self' => $user->your_self,
                    ];
               });

          return Inertia::render('frontend/real-estate-agents', [
               'owners' => $owners,
               'realtors' => $realtors,
               'boths' => $boths
          ]);
     }
     public function whyTennessee(): Response
     {
          return Inertia::render('frontend/why-tennessee');
     }
     public function tennesseeRelocation(): Response
     {
          return Inertia::render('frontend/tennessee-relocation');
     }
     public function singleProduct($id): Response
     {
          $listing = $this->service->findData($id);

          return Inertia::render('frontend/single-product', ['listing' => $listing]);
     }

     public function livetennessee(): Response
     {
          return Inertia::render('frontend/live-tennessee');
     }
     public function rentingBuy(): Response
     {
          return Inertia::render('frontend/renting-buy');
     }
     public function livingInNashville(): Response
     {
          return Inertia::render('frontend/living-in-nashville');
     }
     public function costOfRentingTennessee(): Response
     {
          return Inertia::render('frontend/cost-of-renting-tennessee');
     }
     public function movingTennesseeRenting(): Response
     {
          return Inertia::render('frontend/moving-tennessee-renting');
     }
     public function livingInCookeville(): Response
     {
          return Inertia::render('frontend/living-in-cookeville');
     }
     public function livingInKnoxville(): Response
     {
          return Inertia::render('frontend/living-in-knoxville');
     }
     public function livingInJohnsonCity(): Response
     {
          return Inertia::render('frontend/living-in-johnson-city');
     }
     public function livingInFranklin(): Response
     {
          return Inertia::render('frontend/living-in-franklin');
     }
     public function livingInMemphis(): Response
     {
          return Inertia::render('frontend/living-in-memphis');
     }
     public function livingInClarksville(): Response
     {
          return Inertia::render('frontend/living-in-clarksville');
     }
     public function livingInMurfreesboro(): Response
     {
          return Inertia::render('frontend/living-in-murfreesboro');
     }
     public function livingInKingsport(): Response
     {
          return Inertia::render('frontend/living-in-kingsport');
     }
     public function livingInJackson(): Response
     {
          return Inertia::render('frontend/living-in-jackson');
     }
     public function costOfLivingInTennessee(): Response
     {
          return Inertia::render('frontend/cost-of-living-in-tennessee');
     }
     public function prosConsTennessee(): Response
     {
          return Inertia::render('frontend/pros-cons-tennessee');
     }

     public function userDetails($id): Response
     {
          try {
               $decryptedId = Crypt::decryptString($id);
               $user = User::findOrFail($decryptedId);
               $listings = Listing::where('user_id', $decryptedId)
                    ->with(['city', 'galleries'])
                    ->get();
               // dd($listings);

               return Inertia::render('frontend/user-details', [
                    'user' => $user,
                    'listings' => $listings
               ]);
          } catch (\Exception $e) {
               abort(404);
          }
     }
     public function submitRequest(Request $request)
     {
          $request->validate([
               'name'  => 'required|string|max:255',
               'email' => 'required|email',
               'phone' => 'nullable|string|max:20',
               'listing_id' => 'required|integer',
          ]);

          $listing = Listing::with('user')->findOrFail($request->listing_id);
          $owner   = $listing->user;
          ContactRealsateAgent::create([
               'name' => $request->name,
               'email' => $request->email,
               'phone' => $request->phone,
               'listing_id' => $listing->id,
               'realstate_agent_id' => $owner->id,
          ]);
          $data = [
               'name'  => $request->name,
               'email' => $request->email,
               'phone' => $request->phone,
               'listing_title' => $listing->title,
               'purchase_price' => $listing->purchase_price,
               'owner_name' => $owner->name,
          ];

          Mail::to($owner->email)->send(new ContactRealsateAgentMail($data));

          return redirect()->back()->with('success', 'Request sent!');
     }


     public function userContact(Request $request)
     {
          $data = $request->validate([
               'name'     => 'required|string|max:255',
               'email'    => 'required|email',
               'message'  => 'required|string',
               'user_id' => 'required|exists:users,id',
          ]);
          $user = User::findOrFail($data['user_id']);

          UserContact::create([
               'name'     => $data['name'],
               'email'    => $data['email'],
               'message'  => $data['message'],
               'user_id' => $data['user_id'],
          ]);

          $mailData = [
               'name'  => $data['name'],
               'email' => $data['email'],
               'message_body'  => $data['message'],
               'user_name'    => $user->name,
          ];


          Mail::to($user->email)->send(new UserContactMail($mailData));

          return back()->with('success', 'Request sent successfully!');
     }
}
